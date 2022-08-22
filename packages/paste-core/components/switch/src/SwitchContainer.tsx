import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchContainerProps} from './types';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot, Label} from '@twilio-paste/label';
import {Box} from '@twilio-paste/box';
import {HelpText} from '@twilio-paste/help-text';

const SwitchContainer = React.forwardRef<HTMLLabelElement, SwitchContainerProps>(
  ({element = 'SWITCH_CONTAINER', children, disabled, helpText, label, id, required = false, ...props}, ref) => {
    const switchId = id ? id : useUID();
    const helpTextId = useUID();
    const labelId = useUID();

    return (
      <>
        <Label htmlFor={switchId} element={element} marginBottom="space0" disabled={disabled} {...props} ref={ref}>
          <MediaObject>
            <MediaFigure>
              {React.cloneElement(children as React.ReactElement, {
                id: switchId,
                labelId: labelId,
                disabled: disabled,
              })}
            </MediaFigure>
            <Text
              as="span"
              id={labelId}
              marginLeft="space30"
              fontWeight="fontWeightMedium"
              element={`${element}_LABEL_TEXT_WRAPPER`}
            >
              <MediaObject verticalAlign="top">
                {required && (
                  <MediaFigure spacing="space20">
                    <RequiredDot />
                  </MediaFigure>
                )}
                <MediaBody>{label ?? <></>}</MediaBody>
              </MediaObject>
            </Text>
          </MediaObject>
        </Label>
        {helpText ? (
          // @ts-ignore TODO:no 50px tokens
          <Box element={`${element}_HELP_TEXT_WRAPPER`} marginLeft="50px">
            <HelpText marginTop="space0" id={helpTextId}>
              {helpText}
            </HelpText>
          </Box>
        ) : null}
      </>
    );
  }
);

SwitchContainer.displayName = 'SwitchContainer';

SwitchContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  required: PropTypes.bool,
};

export {SwitchContainer};
