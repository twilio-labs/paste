import { ChatComposer, ChatComposerActionGroup, ChatComposerContainer } from "@twilio-paste/chat-composer";
import { $getRoot, ClearEditorPlugin, type EditorState } from "@twilio-paste/lexical-library";
import * as React from "react";

import { useAssistantThreadsStore } from "../../stores/assistantThreadsStore";
import useStoreWithLocalStorage from "../../stores/useStore";
import { EnterKeySubmitPlugin } from "./EnterKeySubmitPlugin";
import { FocusComposerPlugin } from "./FocusComposerPlugin";
import { SendButtonPlugin } from "./SendButtonPlugin";

export const AssistantComposer: React.FC<{ onMessageCreation: (message: string, selectedThread: string) => void }> = ({
  onMessageCreation,
}) => {
  const [message, setMessage] = React.useState("");
  const threadsStore = useStoreWithLocalStorage(useAssistantThreadsStore, (state) => state);
  const selectedThread = threadsStore?.selectedThreadID;

  const editorRef = React.useRef(null);

  const handleComposerChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setMessage(text);
    });
  };

  const submitMessage = (): void => {
    if (message === "" || selectedThread == null) return;
    onMessageCreation(message, selectedThread);
  };

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
        ariaLabel="Message"
        placeholder="Type here..."
        onChange={handleComposerChange}
        ref={editorRef}
      >
        <ChatComposerActionGroup>
          <ClearEditorPlugin />
          <SendButtonPlugin onClick={submitMessage} disabled={selectedThread == null} />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
          <FocusComposerPlugin selectedThread={selectedThread} />
        </ChatComposerActionGroup>
      </ChatComposer>
    </ChatComposerContainer>
  );
};
