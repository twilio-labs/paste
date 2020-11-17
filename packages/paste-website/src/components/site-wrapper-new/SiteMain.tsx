import * as React from 'react';
import {Box, BoxElementProps} from '@twilio-paste/box';

export const SiteMain: React.FC<BoxElementProps> = props => <Box as="main" flex="1" paddingTop="space100" {...props} />;

export const SiteMainInner: React.FC<BoxElementProps> = props => <Box {...props} />;
