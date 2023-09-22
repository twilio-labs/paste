import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Tooltip, useTooltipState } from "@twilio-paste/tooltip";
import * as React from "react";

interface ExternalLinkButtonProps {
  href: string;
  i18nLinkLabel?: string;
  element?: BoxProps["element"];
}

export const ExternalLinkButton: React.FC<React.PropsWithChildren<ExternalLinkButtonProps>> = ({
  i18nLinkLabel = "Open code block in new page",
  href,
  element = "EXTERNAL_LINK",
}) => {
  const tooltipState = useTooltipState();
  const tooltipText = i18nLinkLabel;
  // Prevents tooltip being visible on first render due to reakit positioning bug code
  const isFirstRender = React.useRef(true);

  /*
   * NOTE: Reakit has a bug where the tooltip doesn't recalc position on content changes
   * This is a workaround until we upgrade to Ariakit with Floating UI fixes
   * https://github.com/twilio-labs/paste/discussions/2037
   */
  React.useEffect(() => {
    // This prevents the tooltip from showing up on mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    tooltipState.hide();
    setTimeout(() => tooltipState.show(), 0);
  }, [tooltipText]);

  return (
    <Tooltip text={tooltipText} element={`${element}_TOOLTIP`}>
      <Button as="a" variant="inverse" size="icon_small" href={href} element={element} target="_blank">
        <LinkExternalIcon decorative />
        <ScreenReaderOnly>{i18nLinkLabel}</ScreenReaderOnly>
      </Button>
    </Tooltip>
  );
};

ExternalLinkButton.displayName = "ExternalLinkButton";
