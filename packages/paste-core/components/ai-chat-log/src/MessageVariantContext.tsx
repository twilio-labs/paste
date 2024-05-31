import * as React from "react";

export type MessageVariants = "bot" | "user";
export const MessageVariantContext = React.createContext<MessageVariants>("bot");
