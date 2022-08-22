import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchContainerProps} from './types';
import {SwitchHelpText} from './SwitchHelpText';
import {SwitchLabelText} from './SwitchLabelText';
import {useUID} from '@twilio-paste/uid-library';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot, Label} from '@twilio-paste/label';

const SwitchContainer = React.forwardRef<HTMLLabelElement, SwitchContainerProps>(
  ({element = 'SWITCH', children, disabled, helpText, label, id, required = false, ...props}, ref) => {
    const switchId = id ? id : useUID();
    const helpTextId = useUID();
    const labelId = useUID();

    return (
      <>
        <Label
          htmlFor={switchId}
          element={`${element}_CONTAINER`}
          marginBottom="space0"
          disabled={disabled}
          {...props}
          ref={ref}
        >
          <MediaObject>
            <MediaFigure>
              {React.cloneElement(children as React.ReactElement, {
                id: switchId,
                element: element,
                labelId: labelId,
                disabled: disabled,
              })}
            </MediaFigure>
            <SwitchLabelText element={`${element}_LABEL_TEXT_WRAPPER`} id={labelId}>
              <MediaObject verticalAlign="top">
                {required && (
                  <MediaFigure spacing="space20">
                    <RequiredDot />
                  </MediaFigure>
                )}
                <MediaBody>{label ?? <></>}</MediaBody>
              </MediaObject>
            </SwitchLabelText>
          </MediaObject>
        </Label>
        {helpText ? (
          <SwitchHelpText element={`${element}_HELP_TEXT_WRAPPER`} helpTextId={helpTextId}>
            {helpText}
          </SwitchHelpText>
        ) : (
          <></>
        )}
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
