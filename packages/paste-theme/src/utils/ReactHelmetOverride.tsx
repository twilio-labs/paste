import * as React from 'react';
import {Helmet as ReactHelmet, HelmetProps as ReactHelmetProps} from 'react-helmet';

interface HelmetProps extends ReactHelmetProps, React.PropsWithChildren {}

export const Helmet = (props: HelmetProps) => <ReactHelmet {...props} />;
