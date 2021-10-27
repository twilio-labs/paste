import * as React from 'react';
import {PasteMDXProvider} from '../components/paste-mdx-provider';

interface GenericLayoutProps {
  children?: React.ReactElement;
}

const GenericLayout: React.FC<GenericLayoutProps> = ({children}) => {
  return <PasteMDXProvider>{children}</PasteMDXProvider>;
};

export default GenericLayout;
