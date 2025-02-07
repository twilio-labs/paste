import * as React from "react";

import type { SidePanelStateReturn, UseSidePanelStateProps } from "./types";

export const useSidePanelState = ({ open = false }: UseSidePanelStateProps = {}): SidePanelStateReturn => {
  const [isOpen, setIsOpen] = React.useState(open);

  return {
    isOpen,
    setIsOpen,
  };
};
