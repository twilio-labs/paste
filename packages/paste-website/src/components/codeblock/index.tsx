import type { CodeBlockProps } from "@twilio-paste/code-block";
import { CodeBlock } from "@twilio-paste/code-block";
import * as React from "react";

export type CodeblockProps = CodeBlockProps & {
  className: string;
};

export const Codeblock: React.FC<React.PropsWithChildren<CodeblockProps>> = ({
  children,
  className = "language-jsx",
}) => {
  if (children == null) {
    return null;
  }
  const language = className.replace(/language-/, "") as CodeBlockProps["language"];
  return <CodeBlock code={children} language={language} />;
};
