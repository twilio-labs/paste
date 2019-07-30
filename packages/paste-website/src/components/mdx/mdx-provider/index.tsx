import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {Heading} from '@twilio-paste/heading';
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td} from '../../table';

interface PasteMDXProviderProps {
  children?: React.ReactElement;
}

export const PasteMDXProvider: React.FC<PasteMDXProviderProps> = (props: PasteMDXProviderProps): React.ReactElement => {
  return (
    <MDXProvider
      components={{
        h1: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h1" headingStyle="headingStyle60" />
        ),
        h2: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h2" headingStyle="headingStyle50" />
        ),
        h3: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h3" headingStyle="headingStyle40" />
        ),
        h4: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h4" headingStyle="headingStyle30" />
        ),
        h5: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h5" headingStyle="headingStyle20" />
        ),
        h6: (props: React.ComponentProps<typeof Heading>): React.ReactElement => (
          <Heading {...props} as="h6" headingStyle="headingStyle10" />
        ),
        p: (props: React.ComponentProps<'p'>): React.ReactElement => <p {...props} />,
        ul: (props: React.ComponentProps<'ul'>): React.ReactElement => <ul {...props} />,
        ol: (props: React.ComponentProps<'ol'>): React.ReactElement => <ol {...props} />,
        li: (props: React.ComponentProps<'li'>): React.ReactElement => <li {...props} />,
        blockquote: (props: React.ComponentProps<'blockquote'>): React.ReactElement => <blockquote {...props} />,
        table: (props: React.ComponentProps<'table'>): React.ReactElement => <Table {...props} />,
        thead: (props: React.ComponentProps<'thead'>): React.ReactElement => <Thead {...props} />,
        tbody: (props: React.ComponentProps<'tbody'>): React.ReactElement => <Tbody {...props} />,
        tfoot: (props: React.ComponentProps<'tfoot'>): React.ReactElement => <Tfoot {...props} />,
        tr: (props: React.ComponentProps<'tr'>): React.ReactElement => <Tr {...props} />,
        th: (props: React.ComponentProps<'th'>): React.ReactElement => <Th {...props} />,
        td: (props: React.ComponentProps<'td'>): React.ReactElement => <Td {...props} />,
        pre: (props: React.ComponentProps<'pre'>): React.ReactElement => <pre {...props} />,
        code: (props: React.ComponentProps<'code'>): React.ReactElement => <code {...props} />,
        em: (props: React.ComponentProps<'em'>): React.ReactElement => <em {...props} />,
        strong: (props: React.ComponentProps<'strong'>): React.ReactElement => <strong {...props} />,
        del: (props: React.ComponentProps<'del'>): React.ReactElement => <del {...props} />,
        hr: (props: React.ComponentProps<'hr'>): React.ReactElement => <hr {...props} />,
        a: (props: React.ComponentProps<'a'>): React.ReactElement => <a {...props} />, // eslint-disable-line jsx-a11y/anchor-has-content
        img: (props: React.ComponentProps<'img'>): React.ReactElement => <img {...props} />, // eslint-disable-line jsx-a11y/alt-text
      }}
    >
      {props.children}
    </MDXProvider>
  );
};
