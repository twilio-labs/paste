import path from 'path';
/**
 * API endpoint for querying our doc site with ChatGPT4
 *
 * Requires two environment variables:
 * - OPENAI_API_KEY: Your OpenAI API key
 * - OPENAI_API_SECRET: Custom secret to block unauthorized requests
 *
 * Please set these in your .env file and on your deployment boxes configuration.
 */
import { fileURLToPath } from 'url';

import { loadQAStuffChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { FaissStore } from 'langchain/vectorstores/faiss';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { question, secret } = req.body;
  // Exit early if the required params aren't provided
  if (!question || secret !== process.env.OPENAI_API_SECRET) {
    res.status(200).send({ answer: 'Please provide a question' });
    return;
  }

  /*
   * Get the FAISS DB
   */
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const directory = path.join(__dirname, '../../../indexes/faiss_index');
  const loadedVectorStore = await FaissStore.loadFromPython(directory, new OpenAIEmbeddings());

  /*
   * Create the OpenAI model
   */
  const model = new ChatOpenAI({
    modelName: 'gpt-4',
    temperature: 0,
  });

  /*
   * Create the QA stuff chain from our GPT-4 model
   */
  const stuffChain = loadQAStuffChain(model);

  try {
    /*
     * We cannot provide GPT-4 with our entire doc site. For this reason we use the FAISS DB.
     * This DB is a compressed vector db that allows us to search for similar "documents"
     * based on a provided question string. We take the top 4 results and provide them to
     * GPT-4 for further processing.
     */
    const inputDocuments = await loadedVectorStore.similaritySearch(question, 4);

    /*
     * Ask GPT-4 the question and provide the input documents
     */
    const answer = await stuffChain.call({
      // eslint-disable-next-line camelcase
      input_documents: inputDocuments,
      question,
    });

    res.status(200).send({ answer });
  } catch (error) {
    res.status(500).send({ error });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10kb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 15,
};
