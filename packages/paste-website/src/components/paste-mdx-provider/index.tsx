import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import styled from '@emotion/styled';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Codeblock, CodeblockProps} from '../codeblock';
import {Table, Tbody, Tr, Th, Td} from '../table';
import {AnchoredHeading} from '../Heading';
import {StyledHr} from '../StyledHr';
import {UL, OL, LI, InlineCode, Pre} from '../Typography';
// Shortcode imports
import {ComponentHeader} from '../shortcodes/component-header';
import {LivePreview} from '../shortcodes/live-preview';
import {TableOfContents} from '../shortcodes/table-of-contents';

interface PasteMDXProviderProps {
  children?: React.ReactElement;
}

const StyledContentWrapper = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  /* magic number from Jasons initial layout */
  max-width: 816px;
  min-width: 0;
`;

// These sub styles fix a bug that causes it to break line-heights
const StyledSup = styled.sup`
  vertical-align: baseline;
  position: relative;
  top: -0.4rem;
`;

const shortcodes = {ComponentHeader, LivePreview, TableOfContents};

/* eslint-disable no-shadow */
/*
  "error  'props' is already declared in the upper scope": these errors I don't
  think are actually real. Because top level props is actually a different set of
  props than that are passed to the components. I think eslint is confused.
*/
export const PasteMDXProvider: React.FC<PasteMDXProviderProps> = (props: PasteMDXProviderProps): React.ReactElement => {
  return (
    <MDXProvider
      components={{
        ...shortcodes,
        h1: (props: Heading): React.ReactElement => <Heading {...props} as="h1" variant="heading10" />,
        h2: (props: Heading): React.ReactElement => <AnchoredHeading {...props} as="h2" variant="heading20" />,
        h3: (props: Heading): React.ReactElement => <AnchoredHeading {...props} as="h3" variant="heading30" />,
        h4: (props: Heading): React.ReactElement => <AnchoredHeading {...props} as="h4" variant="heading40" />,
        h5: (props: Heading): React.ReactElement => <AnchoredHeading {...props} as="h5" variant="heading50" />,
        h6: (props: Heading): React.ReactElement => <AnchoredHeading {...props} as="h6" variant="heading60" />,
        p: (props: React.ComponentProps<typeof Paragraph>): React.ReactElement => <Paragraph {...props} />,
        ul: (props: React.ComponentProps<typeof UL>): React.ReactElement => <UL {...props} />,
        ol: (props: React.ComponentProps<typeof OL>): React.ReactElement => <OL {...props} />,
        li: (props: React.ComponentProps<typeof LI>): React.ReactElement => <LI {...props} />,
        blockquote: (props: React.ComponentProps<'blockquote'>): React.ReactElement => <blockquote {...props} />,
        table: (props: React.ComponentProps<'table'>): React.ReactElement => <Table {...props} />,
        thead: (props: React.ComponentProps<'thead'>): React.ReactElement => <thead {...props} />,
        tbody: (props: React.ComponentProps<'tbody'>): React.ReactElement => <Tbody {...props} />,
        tfoot: (props: React.ComponentProps<'tfoot'>): React.ReactElement => <tfoot {...props} />,
        tr: (props: React.ComponentProps<'tr'>): React.ReactElement => <Tr {...props} />,
        th: (props: React.ComponentProps<'th'>): React.ReactElement => <Th {...props} />,
        td: (props: React.ComponentProps<'td'>): React.ReactElement => <Td {...props} />,
        pre: (props: React.ComponentProps<'pre'>): React.ReactElement => <Pre {...props} />,
        code: (props: CodeblockProps): React.ReactElement => <Codeblock {...props} />,
        inlineCode: (props: React.ComponentProps<typeof InlineCode>): React.ReactElement => <InlineCode {...props} />,
        em: (props: React.ComponentProps<'em'>): React.ReactElement => <em {...props} />,
        strong: (props: React.ComponentProps<'strong'>): React.ReactElement => <strong {...props} />,
        del: (props: React.ComponentProps<'del'>): React.ReactElement => <del {...props} />,
        hr: (props: React.ComponentProps<'hr'>): React.ReactElement => <StyledHr {...props} />,
        a: (props: Anchor): React.ReactElement => <Anchor {...props} />, // eslint-disable-line jsx-a11y/anchor-has-content
        img: (props: React.ComponentProps<'img'>): React.ReactElement => <img {...props} />, // eslint-disable-line jsx-a11y/alt-text
        sup: (props: React.ComponentProps<'sup'>): React.ReactElement => <StyledSup {...props} />,
        content: (props: React.ComponentProps<'div'>): React.ReactElement => <StyledContent {...props} />,
        contentwrapper: (props: React.ComponentProps<'div'>): React.ReactElement => <StyledContentWrapper {...props} />,
      }}
    >
      {props.children}
    </MDXProvider>
  );
};
/* eslint-enable no-shadow */
