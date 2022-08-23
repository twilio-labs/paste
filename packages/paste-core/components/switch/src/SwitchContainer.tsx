import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchContainerProps} from './types';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {Label} from '@twilio-paste/label';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {HelpText} from '@twilio-paste/help-text';

const SwitchContainer = React.forwardRef<HTMLLabelElement, SwitchContainerProps>(
  ({element = 'SWITCH_CONTAINER', children, disabled, helpText, label, id, required = false, ...props}, ref) => {
    const switchId = id ? id : useUID();
    const helpTextId = useUID();
    const labelId = useUID();

    return (
      <MediaObject {...props} element={element} ref={ref}>
        <MediaFigure spacing="space30">
          {React.cloneElement(children as React.ReactElement, {
            id: switchId,
            labelId,
            helpTextId,
            disabled,
          })}
        </MediaFigure>
        <MediaBody>
          <Label
            as="div"
            htmlFor={switchId}
            marginBottom="space0"
            disabled={disabled}
            ref={ref}
            id={labelId}
            element={`${element}_LABEL`}
            required={required}
          >
            <Text as="span" color="currentColor" fontWeight="fontWeightMedium">
              {label ?? <></>}
            </Text>
          </Label>
          {helpText ? (
            <HelpText element={`${element}_HELP_TEXT`} marginTop="space0" id={helpTextId}>
              {helpText}
            </HelpText>
          ) : null}
        </MediaBody>
      </MediaObject>
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
