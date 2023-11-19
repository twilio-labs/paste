import * as React from "react";

export type MessageVariants = "inbound" | "outbound";
export const MessageVariantContext = React.createContext<MessageVariants>("inbound");
