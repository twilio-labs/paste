import { Anchor } from "@twilio-paste/core/anchor";
import { AspectRatio } from "@twilio-paste/core/aspect-ratio";
import { Modal, ModalBody, ModalHeader, ModalHeading } from "@twilio-paste/core/modal";
import type { ModalProps } from "@twilio-paste/core/modal";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { useUID } from "@twilio-paste/core/uid-library";
import * as React from "react";

export type BetaModalProps = Pick<ModalProps, "isOpen" | "onDismiss">;

const BetaModal: React.FC<React.PropsWithChildren<BetaModalProps>> = ({ isOpen, onDismiss }) => {
  const modalID = useUID();
  return (
    <Modal isOpen={isOpen} ariaLabelledby={modalID} onDismiss={onDismiss} size="wide">
      <ModalHeader>
        <ModalHeading id={modalID}>Welcome to Paste Remix</ModalHeading>
      </ModalHeader>
      <ModalBody>
        <Paragraph>Paste Remix is a design tool used to create themes for applications built with Paste.</Paragraph>
        <Paragraph>
          You can use Remix to customize and brand your Twilio application. Example applications include{" "}
          <Anchor href="https://www.twilio.com/flex" showExternal>
            Flex
          </Anchor>{" "}
          <Anchor href="https://www.twilio.com/docs/flex/developer/plugins" showExternal>
            plugins
          </Anchor>{" "}
          which may need to look and feel like your company brand.
        </Paragraph>
        <Paragraph>
          On the left you can select a &ldquo;Token category&rdquo;. Selecting a category displays a list of{" "}
          <Anchor href="https://paste.twilio.design/tokens/" showExternal>
            Design Tokens
          </Anchor>{" "}
          that power Paste and its design language. Changing the values of these updates the look and feel of Paste. The
          result is reflected to the right of the token controls.
        </Paragraph>
        <Paragraph>
          Once you&rsquo;re happy with the design, you can export the theme to use with the Customization Provider, and
          be on your way to creating your custom Paste experience.
        </Paragraph>
        <Paragraph>
          Remix is currently an <strong>experimental release</strong>. If you have any feedback on this tool,{" "}
          <Anchor href="https://github.com/twilio-labs/paste/discussions/new" showExternal>
            we&rsquo;d love to hear your thoughts
          </Anchor>
          . We can&rsquo;t wait to see what you build!
        </Paragraph>

        <AspectRatio ratio="16:9">
          <iframe
            title="Remix silent demo video"
            src="https://www.loom.com/embed/6a2a434ea18e48e4850a48e4f734a797"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </AspectRatio>
      </ModalBody>
    </Modal>
  );
};

export { BetaModal };
