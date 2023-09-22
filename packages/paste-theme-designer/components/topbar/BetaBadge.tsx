import * as React from 'react';
import { Badge } from '@twilio-paste/core/badge';
import { NewIcon } from '@twilio-paste/icons/cjs/NewIcon';

import { BetaModal } from './BetaModal';
import { SimpleStorage } from '../../utils/SimpleStorage';

const BetaBadge = (): JSX.Element => {
  const localStorageKey = 'beta-modal-dismissed';
  const [showBetaModal, setShowBetaModal] = React.useState(false);

  React.useEffect(() => {
    setShowBetaModal(SimpleStorage.get(localStorageKey) !== 'true' || false);
  }, []);

  const handleClick = React.useCallback(() => {
    setShowBetaModal(true);
  }, []);

  const handleDismiss = React.useCallback(() => {
    setShowBetaModal(false);
    SimpleStorage.set(localStorageKey, 'true');
  }, []);

  return (
    <>
      <Badge aria-haspopup="dialog" as="button" variant="new" onClick={handleClick}>
        <NewIcon decorative /> Experimental
      </Badge>
      <BetaModal isOpen={showBetaModal} onDismiss={handleDismiss} />
    </>
  );
};

export { BetaBadge };
