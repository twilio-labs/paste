import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { CLEAR_EDITOR_COMMAND, useLexicalComposerContext } from "@twilio-paste/lexical-library";

export const SendButtonPlugin = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }): JSX.Element => {
  const [editor] = useLexicalComposerContext();

  const handleSend = (): void => {
    onClick();
    editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
  };

  return (
    <Box position="absolute" top="space30" right="space30">
      <Button variant="primary_icon" size="reset" onClick={handleSend} disabled={disabled}>
        <SendIcon decorative={false} title="Send message" />
      </Button>
    </Box>
  );
};
