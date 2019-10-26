import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';

interface Paragraph {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
}

const Paragraph: React.FC<Paragraph> = props => {
  return (
    <Text
      as="p"
      marginBottom="space70"
      fontSize="fontSize30"
      lineHeight="lineHeight20"
      fontWeight="fontWeightNormal"
      textColor="colorText"
    >
      {props.children}
    </Text>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

Paragraph.displayName = 'Paragraph';
export {Paragraph};
