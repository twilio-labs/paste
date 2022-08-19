import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchContainerProps} from './types';
import {SwitchHelpText} from './SwitchHelpText';
import {SwitchLabelText} from './SwitchLabelText';
import {useUID} from '@twilio-paste/uid-library';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot, Label} from '@twilio-paste/label';

const SwitchContainer = React.forwardRef<HTMLLabelElement, SwitchContainerProps>(
  ({element = 'SWITCH_CONTAINER', children, helpText, label, id, required = false, ...props}, ref) => {
    const switchId = id ? id : useUID();
    const helpTextId = useUID();
    const labelId = useUID();

    return (
      <>
        <Label htmlFor={switchId} marginBottom="space0" {...props} ref={ref}>
          <MediaObject>
            <MediaFigure>
              {React.cloneElement(children as React.ReactElement, {switchId: switchId, labelId: labelId})}
            </MediaFigure>
            <SwitchLabelText element={`${element}_LABEL_TEXT_WRAPPER`} id={labelId}>
              <MediaObject verticalAlign="top">
                {required && (
                  <MediaFigure spacing="space20">
                    <RequiredDot />
                  </MediaFigure>
                )}
                {label}
                <MediaBody>{children ?? <></>}</MediaBody>
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
  element: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
};

export {SwitchContainer};
