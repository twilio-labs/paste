/*
 * Taken from a draft PR that addresses portal issues in NextJS - https://github.com/ariakit/ariakit/pull/802
 * The main difference when comparing this file with the latest reakit version is the useEffect hook found here https://github.com/ariakit/ariakit/pull/802/files#diff-b87c59df480f1e77ba8a0bcdb6dbb55b0fc6f4028d2a773e8278b28af3c785bc
 * Unfortunaely this never got merged in as focus shifted towards to Ariakit
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {canUseDOM} from 'reakit-utils/canUseDOM';

export type PortalProps = {
  /**
   * Portal's children.
   */
  children: React.ReactNode;
};

function getBodyElement(): HTMLElement | null {
  return canUseDOM ? document.body : null;
}

export const PortalContext = React.createContext<HTMLElement | null>(getBodyElement());

export function Portal({children}: PortalProps): React.ReactPortal | null {
  const context = React.useContext(PortalContext) || getBodyElement();
  const [hostNode, setHostNode] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!context) return undefined;
    const element = document.createElement('div');
    element.className = Portal.__className;
    setHostNode(element);
    // eslint-disable-next-line unicorn/prefer-dom-node-append
    context.appendChild(element);
    return () => {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      context.removeChild(element);
    };
  }, [context]);

  if (hostNode) {
    return ReactDOM.createPortal(
      <PortalContext.Provider value={hostNode}>{children}</PortalContext.Provider>,
      hostNode
    );
  }
  // ssr
  return null;
}

Portal.__className = '__reakit-portal';
Portal.__selector = `.${Portal.__className}`;
