import "@docsearch/css";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import type { DocSearchModal as DocSearchModalType } from "@docsearch/react";
import Head from "next/head";
import * as React from "react";

import { DOCSEARCHV3_APIKEY, DOCSEARCHV3_APPID, DOCSEARCHV3_INDEXNAME } from "../../../constants";

// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-search-algolia/src/theme/SearchBar/index.tsx
let DocSearchModal: typeof DocSearchModalType | null = null;

const SiteHeaderSearch: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const searchButtonRef = React.useRef<HTMLButtonElement>(null);

  const importDocSearch = React.useCallback(async () => {
    if (DocSearchModal) {
      return;
    }
    const { DocSearchModal: Modal }: typeof import("@docsearch/react") = await import(
      /* webpackChunkName: 'DocSearchModal' */ "@docsearch/react/modal"
    );
    DocSearchModal = Modal;
  }, []);

  const onOpen = React.useCallback(async () => {
    await importDocSearch();
    setIsOpen(true);
  }, [importDocSearch, setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback(async () => {
    await importDocSearch();
    setIsOpen(true);
  }, [importDocSearch, setIsOpen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href={`https://${DOCSEARCHV3_APPID}-dsn.algolia.net`} crossOrigin="anonymous" />
      </Head>
      <DocSearchButton
        onTouchStart={importDocSearch}
        onFocus={importDocSearch}
        onMouseOver={importDocSearch}
        onClick={onOpen}
        ref={searchButtonRef}
      />
      {isOpen && DocSearchModal ? (
        <DocSearchModal
          placeholder={`Try "button" or "token"`}
          appId={DOCSEARCHV3_APPID}
          indexName={DOCSEARCHV3_INDEXNAME || ""}
          apiKey={DOCSEARCHV3_APIKEY || ""}
          initialScrollY={window.scrollY}
          onClose={onClose}
        />
      ) : null}
    </>
  );
};

export { SiteHeaderSearch };
