import * as React from "react";

export type AIMessageVariants = "bot" | "user";
export const AIMessageVariantContext = React.createContext<AIMessageVariants>("bot");
