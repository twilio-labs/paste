#!/usr/bin/env node
/* eslint-disable no-console */
import { inspect } from "util";

import { createClient } from "@supabase/supabase-js";
import minimist from "minimist";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";

import { fetchSources } from "./sources";

async function generateEmbeddings(): Promise<void> {
  const argv = minimist(process.argv.slice(2));

  const shouldRefresh = Boolean(argv.refresh);
  const { OPENAI_API_KEY, SUPABASE_URL, SUPABASE_KEY } = process.env;

  if (!SUPABASE_URL || !SUPABASE_KEY || !OPENAI_API_KEY) {
    throw new Error(
      "Environment variables SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY are required: skipping embeddings generation",
    );
  }

  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  // Use this version to track which pages to purge after the refresh
  const refreshVersion = uuidv4();

  const refreshDate = new Date();

  const embeddingSources = await fetchSources();

  console.log(`Discovered ${embeddingSources.length} pages`);

  if (!shouldRefresh) {
    console.log("Checking which pages are new or have changed");
  } else {
    console.log("Refresh flag set, re-generating all pages");
  }

  for (const embeddingSource of embeddingSources) {
    const { type, source, path, parentPath } = embeddingSource;

    try {
      const { checksum, meta, sections } = await embeddingSource.load();

      // // Check for existing page in DB and compare checksums
      const { error: fetchPageError, data: existingPage } = await supabaseClient
        .from("page")
        .select("id, path, checksum, parentPage:parent_page_id(id, path)")
        .filter("path", "eq", path)
        .limit(1)
        .maybeSingle();

      if (fetchPageError) {
        throw fetchPageError;
      }

      // // We use checksum to determine if this page & its sections need to be regenerated
      if (!shouldRefresh && existingPage?.checksum === checksum) {
        const existingParentPage = Array.isArray(existingPage?.parentPage)
          ? existingPage?.parentPage[0]
          : existingPage?.parentPage;
        // If parent page changed, update it
        if (existingParentPage?.path !== parentPath) {
          console.log(`[${path}] Parent page has changed. Updating to '${parentPath}'...`);
          const { error: fetchParentPageError, data: parentPage } = await supabaseClient
            .from("page")
            .select()
            .filter("path", "eq", parentPath)
            .limit(1)
            .maybeSingle();
          if (fetchParentPageError) {
            throw fetchParentPageError;
          }
          const { error: updatePageError } = await supabaseClient
            .from("page")
            // eslint-disable-next-line camelcase
            .update({ parent_page_id: parentPage?.id })
            .filter("id", "eq", existingPage.id);
          if (updatePageError) {
            throw updatePageError;
          }
        }
        // No content/embedding update required on this page Update other meta info
        const { error: updatePageError } = await supabaseClient
          .from("page")
          .update({
            type,
            source,
            meta,
            version: refreshVersion,
            // eslint-disable-next-line camelcase
            last_refresh: refreshDate,
          })
          .filter("id", "eq", existingPage.id);
        if (updatePageError) {
          throw updatePageError;
        }
        continue;
      }

      if (existingPage) {
        if (!shouldRefresh) {
          console.log(`[${path}] Docs have changed, removing old page sections and their embeddings`);
        } else {
          console.log(`[${path}] Refresh flag set, removing old page sections and their embeddings`);
        }

        const { error: deletePageSectionError } = await supabaseClient
          .from("page_section")
          .delete()
          .filter("page_id", "eq", existingPage.id);

        if (deletePageSectionError) {
          throw deletePageSectionError;
        }
      }

      const { error: fetchParentPageError, data: parentPage } = await supabaseClient
        .from("page")
        .select()
        .filter("path", "eq", parentPath)
        .limit(1)
        .maybeSingle();

      if (fetchParentPageError) {
        throw fetchParentPageError;
      }

      // Create/update page record. Intentionally clear checksum until we have successfully generated all page sections.
      const { error: upsertPageError, data: page } = await supabaseClient
        .from("page")
        .upsert(
          {
            checksum: null,
            path,
            type,
            source,
            meta,
            // eslint-disable-next-line camelcase
            parent_page_id: parentPage?.id,
            version: refreshVersion,
            // eslint-disable-next-line camelcase
            last_refresh: refreshDate,
          },
          { onConflict: "path" },
        )
        .select()
        .limit(1)
        .single();

      if (upsertPageError) {
        throw upsertPageError;
      }

      console.log(`[${path}] Adding ${sections.length} page sections (with embeddings)`);
      for (const { slug, heading, content } of sections) {
        // OpenAI recommends replacing newlines with spaces for best results (specific to embeddings)
        const input = content.replace(/\n/g, " ");

        try {
          const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
          });

          const embeddings = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input,
          });

          if (embeddings.data.length === 0) {
            throw new Error(inspect(embeddings.data, false, 2));
          }

          const embeddingData = embeddings.data;

          const { error: insertPageSectionError, data: pageSection } = await supabaseClient
            .from("page_section")
            .insert({
              // eslint-disable-next-line camelcase
              page_id: page.id,
              slug,
              heading,
              content,
              // eslint-disable-next-line camelcase
              token_count: embeddings.usage.total_tokens,
              embedding: embeddingData[0].embedding,
            })
            .select()
            .limit(1)
            .single();

          if (insertPageSectionError) {
            throw insertPageSectionError;
          }
        } catch (error) {
          // TODO: decide how to better handle failed embeddings
          console.error(
            `Failed to generate embeddings for '${path}' page section starting with '${input.slice(0, 40)}...'`,
          );

          throw error;
        }
      }

      // Set page checksum so that we know this page was stored successfully
      const { error: updatePageError } = await supabaseClient
        .from("page")
        .update({ checksum })
        .filter("id", "eq", page.id);

      if (updatePageError) {
        throw updatePageError;
      }
    } catch (error) {
      console.error(
        `Page '${path}' or one/multiple of its page sections failed to store properly. Page has been marked with null checksum to indicate that it needs to be re-generated.`,
      );
      console.error(error);
    }
  }

  console.log("Removing old pages and their sections");

  // Delete pages that have been removed (and their sections via cascade)
  const { error: deletePageError } = await supabaseClient
    .from("page")
    .delete()
    .filter("version", "neq", refreshVersion);

  if (deletePageError) {
    throw deletePageError;
  }

  console.log("Embedding generation complete");
}

async function main(): Promise<void> {
  await generateEmbeddings();
}

main().catch((error) => {
  console.error(error);

  // Exit with non-zero code
  process.exit(1);
});

/* eslint-enable no-console */
