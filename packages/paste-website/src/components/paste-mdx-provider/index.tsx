import { MDXProvider } from '@mdx-js/react';
import { Anchor, isExternalUrl } from '@twilio-paste/anchor';
import type { AnchorProps } from '@twilio-paste/anchor';
import { Box } from '@twilio-paste/box';
import { Callout, CalloutHeading, CalloutList, CalloutListItem, CalloutText } from '@twilio-paste/callout';
import { Heading } from '@twilio-paste/heading';
import type { HeadingProps } from '@twilio-paste/heading';
import { InlineCode } from '@twilio-paste/inline-code';
import { ListItem, OrderedList, UnorderedList } from '@twilio-paste/list';
import { Paragraph } from '@twilio-paste/paragraph';
import { Separator } from '@twilio-paste/separator';
import type { SeparatorProps } from '@twilio-paste/separator';
import { styled } from '@twilio-paste/styling-library';
import { TBody, TFoot, THead, Table, Td, Th, Tr } from '@twilio-paste/table';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

import { Do, DoDont, Dont } from '../DoDont';
import { AnchoredHeading } from '../Heading';
import { PropsTable } from '../PropsTables';
import { Pre } from '../Typography';
import type { CodeblockProps } from '../codeblock';
import { Codeblock } from '../codeblock';
import { ArticleHeader } from '../shortcodes/ArticleHeader';
import { ArticleAside, ArticleContent } from '../shortcodes/ArticleLayouts';
import { ChangelogRevealer } from '../shortcodes/ChangelogRevealer';
import { PageAside } from '../shortcodes/PageAside';
import { StoryPreview } from '../shortcodes/StoryPreview';
// Shortcode imports
import { GenericHeader } from '../shortcodes/generic-header';
import { LivePreview } from '../shortcodes/live-preview';
import { NormalizedComponentHeader } from '../shortcodes/normalized-component-header';
import { NormalizedPatternHeader } from '../shortcodes/normalized-pattern-header';
import { TableOfContents } from '../shortcodes/table-of-contents';

interface PasteMDXProviderProps {
  children?: React.ReactElement;
}

// These sub styles fix a bug that causes it to break line-heights
const StyledSup = styled.sup`
  vertical-align: baseline;
  position: relative;
  top: -0.4rem;
`;

const MdxLink: React.FC<React.PropsWithChildren<AnchorProps>> = (props) => {
  return <Anchor {...props} showExternal={isExternalUrl(props.href)} />;
};

const shortcodes = {
  ChangelogRevealer,
  GenericHeader,
  LivePreview,
  PageAside,
  NormalizedPatternHeader,
  TableOfContents,
  ArticleHeader,
  ArticleContent,
  ArticleAside,
  NormalizedComponentHeader,
  StoryPreview,
  DoDont,
  Do,
  Dont,
  Callout,
  CalloutHeading,
  CalloutList,
  CalloutListItem,
  CalloutText,
  PropsTable,
};

const MDXPoviderComponents = {
  ...shortcodes,
  h1: (props: HeadingProps): React.ReactElement => <Heading {...props} as="h1" variant="heading10" />,
  h2: (props: HeadingProps): React.ReactElement => <AnchoredHeading {...props} as="h2" variant="heading20" />,
  h3: (props: HeadingProps): React.ReactElement => <AnchoredHeading {...props} as="h3" variant="heading30" />,
  h4: (props: HeadingProps): React.ReactElement => <AnchoredHeading {...props} as="h4" variant="heading40" />,
  h5: (props: HeadingProps): React.ReactElement => <AnchoredHeading {...props} as="h5" variant="heading50" />,
  h6: (props: HeadingProps): React.ReactElement => <AnchoredHeading {...props} as="h6" variant="heading60" />,
  p: (props: React.ComponentProps<typeof Paragraph>): React.ReactElement => <Paragraph {...props} />,
  ul: (props: React.ComponentProps<typeof UnorderedList>): React.ReactElement => <UnorderedList {...props} />,
  ol: (props: React.ComponentProps<typeof OrderedList>): React.ReactElement => <OrderedList {...props} />,
  li: (props: React.ComponentProps<typeof ListItem>): React.ReactElement => <ListItem {...props} />,
  blockquote: (props: React.ComponentProps<'blockquote'>): React.ReactElement => <blockquote {...props} />,
  table: (props: React.ComponentProps<typeof Table>): React.ReactElement => (
    <Box marginBottom="space60">
      <Table scrollHorizontally tableLayout="fixed" {...props} />
    </Box>
  ),
  thead: (props: React.ComponentProps<typeof THead>): React.ReactElement => <THead {...props} />,
  tbody: (props: React.ComponentProps<typeof TBody>): React.ReactElement => <TBody {...props} />,
  tfoot: (props: React.ComponentProps<typeof TFoot>): React.ReactElement => <TFoot {...props} />,
  tr: (props: React.ComponentProps<typeof Tr>): React.ReactElement => <Tr {...props} />,
  th: (props: React.ComponentProps<typeof Th>): React.ReactElement => <Th {...props} />,
  td: (props: React.ComponentProps<typeof Td>): React.ReactElement => <Td {...props} />,
  pre: (props: React.ComponentProps<'pre'>): React.ReactElement => <Pre {...props} />,
  code: (props: CodeblockProps): React.ReactElement => <Codeblock {...props} />,
  inlineCode: (props: React.ComponentProps<typeof InlineCode>): React.ReactElement => <InlineCode {...props} />,
  em: (props: React.ComponentProps<'em'>): React.ReactElement => <em {...props} />,
  strong: (props: React.ComponentProps<'strong'>): React.ReactElement => <strong {...props} />,
  del: (props: React.ComponentProps<'del'>): React.ReactElement => <del {...props} />,
  hr: (props: SeparatorProps): React.ReactElement => (
    <Separator {...props} orientation="horizontal" verticalSpacing="space100" />
  ),
  a: (props: AnchorProps): React.ReactElement => <MdxLink {...props} />, // eslint-disable-line jsx-a11y/anchor-has-content
  img: (props: React.ComponentProps<'img'>): React.ReactElement => <img style={{ maxWidth: '100%' }} {...props} />, // eslint-disable-line jsx-a11y/alt-text
  sup: (props: React.ComponentProps<'sup'>): React.ReactElement => <StyledSup {...props} />,
  content: (props: HTMLPasteProps<'div'>): React.ReactElement => (
    <Box element="CONTENT" as="div" maxWidth="size70" minWidth="0" {...props} />
  ),
  contentwrapper: (props: HTMLPasteProps<'input'>): React.ReactElement => (
    <Box element="CONTENT_WRAPPER" as="div" display={['block', 'block', 'flex']} {...props} />
  ),
  contentspacer: (props: HTMLPasteProps<'input'>): React.ReactElement => (
    <Box as="div" marginBottom="space70" {...props} />
  ),
};

/* eslint-disable no-shadow */
/*
 *"error  'props' is already declared in the upper scope": these errors I don't
 *think are actually real. Because top level props is actually a different set of
 *props than that are passed to the components. I think eslint is confused.
 */
interface PasteMDXProviderProps {
  componentOverrides?: { [key: string]: (props: unknown) => React.ReactNode };
}
export const PasteMDXProvider: React.FC<React.PropsWithChildren<PasteMDXProviderProps>> = ({
  componentOverrides,
  children,
}): React.ReactElement => {
  const components =
    componentOverrides != null ? { ...MDXPoviderComponents, ...componentOverrides } : MDXPoviderComponents;

  return <MDXProvider components={components}>{children}</MDXProvider>;
};
/* eslint-enable no-shadow */
