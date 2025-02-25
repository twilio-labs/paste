import { useIsMutating } from "@tanstack/react-query";
import { Button } from "@twilio-paste/button";
import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import {
  $getRoot,
  CLEAR_EDITOR_COMMAND,
  ClearEditorPlugin,
  type EditorState,
  type LexicalEditor,
} from "@twilio-paste/lexical-library";
import * as React from "react";
import { useShallow } from "zustand/react/shallow";

import { useAssistantRunStore } from "../../stores/assistantRunStore";
import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { EnterKeySubmitPlugin } from "./EnterKeySubmitPlugin";

export const AssistantComposer: React.FC<{ onMessageCreation: (message: string, selectedThread?: string) => void }> = ({
  onMessageCreation,
}) => {
  const [message, setMessage] = React.useState("");
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const selectedThread = threadsStore?.selectedThreadID;
  const { activeRun } = useAssistantRunStore(useShallow((state) => state));
  const isCreatingAResponse = useIsMutating({ mutationKey: ["create-assistant-run"] });
  const editorInstanceRef = React.useRef<LexicalEditor>(null);

  const isLoading = Boolean(isCreatingAResponse || activeRun != null);

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === "") return;
    onMessageCreation(message, selectedThread);
  };

  React.useEffect(() => {
    editorInstanceRef.current?.focus();
  }, [editorInstanceRef, selectedThread]);

  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer
        maxHeight="size10"
        config={{
          namespace: "foo",
          onError: (error: Error) => {
            throw error;
          },
        }}
        disabled={isLoading}
        ariaLabel="Message"
        placeholder="Type here..."
        onChange={handleComposerChange}
        editorInstanceRef={editorInstanceRef}
      >
        <ClearEditorPlugin />
        <EnterKeySubmitPlugin onKeyDown={() => !isLoading && submitMessage()} />
      </ChatComposer>
      <ChatComposerActionGroup>
        <Button
          variant="primary_icon"
          size="reset"
          disabled={isLoading}
          onClick={() => {
            if (!isLoading) {
              submitMessage();
              editorInstanceRef.current?.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
            }
          }}
        >
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
};
