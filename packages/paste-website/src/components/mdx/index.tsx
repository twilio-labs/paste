import * as React from 'react';
import {PasteMDXProvider} from './mdx-provider';

interface MDXProps {
  children?: React.ReactElement;
}
export const PasteMDX: React.FC<MDXProps> = (props: MDXProps): React.ReactElement => {
  return <PasteMDXProvider>{props.children}</PasteMDXProvider>;
};
