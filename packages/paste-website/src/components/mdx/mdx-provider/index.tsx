import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {Heading} from '@paste/heading';

interface PasteMDXProviderProps {
  children?: React.ReactElement;
}

export const PasteMDXProvider: React.FC<PasteMDXProviderProps> = (props: PasteMDXProviderProps): React.ReactElement => {
  return (
    <MDXProvider
      components={{
        h1: (props): React.ReactElement => <Heading {...props} as="h1" headingStyle="headingStyle60" />,
        h2: (props): React.ReactElement => <Heading {...props} as="h2" headingStyle="headingStyle50" />,
        h3: (props): React.ReactElement => <Heading {...props} as="h3" headingStyle="headingStyle40" />,
        h4: (props): React.ReactElement => <Heading {...props} as="h4" headingStyle="headingStyle30" />,
        h5: (props): React.ReactElement => <Heading {...props} as="h5" headingStyle="headingStyle20" />,
        h6: (props): React.ReactElement => <Heading {...props} as="h6" headingStyle="headingStyle10" />,
        p: (props): React.ReactElement => <p {...props} />,
        ul: (props): React.ReactElement => <ul {...props} />,
        ol: (props): React.ReactElement => <ol {...props} />,
        li: (props): React.ReactElement => <li {...props} />,
        blockquote: (props): React.ReactElement => <blockquote {...props} />,
        table: (props): React.ReactElement => <table {...props} />,
        tr: (props): React.ReactElement => <tr {...props} />,
        th: (props): React.ReactElement => <th {...props} />,
        td: (props): React.ReactElement => <td {...props} />,
        pre: (props): React.ReactElement => <pre {...props} />,
        code: (props): React.ReactElement => <code {...props} />,
        em: (props): React.ReactElement => <em {...props} />,
        strong: (props): React.ReactElement => <strong {...props} />,
        del: (props): React.ReactElement => <del {...props} />,
        hr: (props): React.ReactElement => <hr {...props} />,
        a: (props): React.ReactElement => <a {...props} />, // eslint-disable-line jsx-a11y/anchor-has-content
        img: (props): React.ReactElement => <img {...props} />, // eslint-disable-line jsx-a11y/alt-text
      }}
    >
      {props.children}
    </MDXProvider>
  );
};
