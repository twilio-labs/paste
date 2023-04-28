import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {Separator} from '@twilio-paste/separator';
import {styled, css} from '@twilio-paste/styling-library';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {useTransition, animated} from '@twilio-paste/animation-library';

import {HamburgerToggle} from './HamburgerToggle';
import {SidebarNavigation} from '../sidebar/SidebarNavigation';
import {ContactUsMenu} from '../../ContactUsMenu';

const StyledModalDialogOverlay = animated(
  styled(ModalDialogPrimitiveOverlay)(
    css({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'colorBackgroundOverlay',
      zIndex: 'zIndex80',
    }),
    /*
     * import Paste Theme Based Styles due to portal positioning.
     * reach portal is a sibling to the main app, so you are now
     * no longer a child of the theme provider. We need to re-set
     * some of the base styles that we rely on inheriting from
     * such as font-family and line-height so that compositions
     * of paste components in the modal are styled correctly
     */
    pasteBaseStyles
  )
);
const ModalDimensions = {
  MAX_WIDTH: '360px',
  MAX_HEIGHT: '500px',
};
const StyledModalDialogContent = animated(
  styled(ModalDialogPrimitiveContent)(
    css({
      position: 'fixed',
      top: 10,
      right: 10,
      width: '0px',
      height: '0px',
      paddingTop: 'space10',
      backgroundColor: 'colorBackgroundBody',
      borderRadius: 'borderRadius20',
      overflow: 'scroll',
      overflowScrolling: 'touch',
      webkitOverflowScrolling: 'touch',
    })
  )
);

const DropShadowWrapper = styled.div(
  css({
    position: 'sticky',
    bottom: 0,
    paddingBottom: 'space40',
    backgroundColor: 'colorBackgroundBody',
    boxShadow: '0 -18px 20px',
    color: 'colorTextWeakest',
  })
);

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<React.PropsWithChildren<MobileNavigationProps>> = ({isOpen, onClose}) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  /*
   * Note: we use this trick to make the hamburger animate to the open state
   * immediately upon mount, to give the illusion that the button that was
   * clicked is the same button in the modal
   */
  React.useEffect(() => {
    const instantOpenTimer = setTimeout(() => {
      setBurgerOpen(isOpen);
    }, 0);
    return () => clearTimeout(instantOpenTimer);
  }, [isOpen]);

  // Our animation configuration
  const transitions = useTransition(isOpen, {
    from: {width: '0px', height: '0px', opacity: 0.3},
    enter: {width: ModalDimensions.MAX_WIDTH, height: ModalDimensions.MAX_HEIGHT, opacity: 1},
    leave: {width: '0px', height: '0px', opacity: 0.1},
    // https://www.react-spring.dev/docs/advanced/config
    config: {
      mass: 0.5,
      tension: 150,
      friction: 22,
    },
  });

  return (
    <>
      {transitions(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (styles: any, item: any) =>
          item && (
            <StyledModalDialogOverlay onDismiss={onClose} allowPinchZoom style={{opacity: styles.opacity}}>
              <StyledModalDialogContent style={styles} aria-label="Website navigation">
                <Box position="fixed" top="24px" right="24px" zIndex="zIndex10">
                  <Button aria-label="Close main navigation" variant="reset" size="reset" onClick={onClose}>
                    <HamburgerToggle toggled={burgerOpen} color="colorTextIcon" />
                  </Button>
                </Box>
                <SidebarNavigation />
                <DropShadowWrapper>
                  <Separator orientation="horizontal" verticalSpacing="space30" />
                  <ContactUsMenu placement="top" />
                </DropShadowWrapper>
              </StyledModalDialogContent>
            </StyledModalDialogOverlay>
          )
      )}
    </>
  );
};
export {MobileNavigation};
