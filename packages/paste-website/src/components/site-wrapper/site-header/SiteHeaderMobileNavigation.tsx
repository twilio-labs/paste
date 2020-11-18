import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {pasteBaseStyles} from '@twilio-paste/theme';
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
    // import Paste Theme Based Styles due to portal positioning.
    // reach portal is a sibling to the main app, so you are now
    // no longer a child of the theme provider. We need to re-set
    // some of the base styles that we rely on inheriting from
    // such as font-family and line-height so that compositions
    // of paste components in the modal are styled correctly
    pasteBaseStyles
  )
);
const StyledModalDialogContent = animated(
  styled(ModalDialogPrimitiveContent)(
    css({
      position: 'fixed',
      top: 10,
      right: 10,
      width: '0px',
      height: '0px',
      maxWidth: 'calc(100vw - 20px)',
      maxHeight: 'calc(100vh - 140px)',
      backgroundColor: 'colorBackgroundBody',
      borderRadius: 'borderRadius20',
    })
  )
);

interface MobileNavigation {
  isOpen: boolean;
  handleClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigation> = ({isOpen, handleClose}) => {
  const inputRef = React.useRef();
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  // Note: we use this trick to make the hamburger animate to the open state
  // immediately upon mount, to give the illusion that the button that was
  // clicked is the same button in the modal
  React.useEffect(() => {
    const instantOpenTimer = setTimeout(() => {
      setBurgerOpen(isOpen);
    }, 1);
    return () => clearTimeout(instantOpenTimer);
  }, [isOpen]);

  // Our animation configuration
  const transitions = useTransition(isOpen, {
    from: {width: '0vw', height: '0vh', opacity: 0.3},
    enter: {width: '100vw', height: '100vh', opacity: 1},
    leave: {width: '0vw', height: '0vh', opacity: 0},
    // https://www.react-spring.io/docs/hooks/api
    config: {
      mass: 1,
      tension: 140,
      friction: 22,
    },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <StyledModalDialogOverlay
              onDismiss={handleClose}
              allowPinchZoom
              initialFocusRef={inputRef}
              style={{opacity: styles.opacity}}
            >
              <StyledModalDialogContent style={styles} aria-label="Website navigation">
                <Box position="absolute" top="10px" right="10px">
                  <HamburgerToggle
                    toggled={burgerOpen}
                    onToggle={() => {
                      handleClose();
                    }}
                  />
                </Box>
                <Box paddingY="space120" overflow="scroll" height="100%" css={{overflowScrolling: 'touch'}}>
                  <SidebarNavigation />
                  <Separator orientation="horizontal" verticalSpacing="space30" />
                  <ContactUsMenu placement="top" />
                </Box>
              </StyledModalDialogContent>
            </StyledModalDialogOverlay>
          )
      )}
    </>
  );
};
export {MobileNavigation};
