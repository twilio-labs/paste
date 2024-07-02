import * as React from "react";

export interface ChatComposerContextProps {
  isDisabled: boolean;
  setIsDisabled?: (value: boolean) => void;
}

const ChatComposerContext = React.createContext<ChatComposerContextProps>({
  isDisabled: false,
});

export { ChatComposerContext };
