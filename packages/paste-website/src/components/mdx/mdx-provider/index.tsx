import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';

interface PasteMDXProviderProps {
  children?: React.ReactElement;
}

const StyledContent = styled.div`
  max-width: 816px;
`;

const StyledUl = styled.ul`
  margin: ${themeGet('space.space50')} 0;
  padding: 0;
`;

const StyledOl = styled.ol`
  margin: ${themeGet('space.space50')} 0;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-left: ${themeGet('space.space60')};
`;

const StyledCode = styled.code`
  display: block;
  margin: ${themeGet('space.space70')} 0;
  padding: ${themeGet('space.space40')} ${themeGet('space.space60')};
  background-color: ${themeGet('colors.colorGray20')};
  border-radius: ${themeGet('radii.borderRadius20')};
`;

const StyledHr = styled.hr`
  height: ${themeGet('borderWidths.borderWidth20')};
  margin: ${themeGet('space.space50')} 0;
  background-color: ${themeGet('borderColors.colorBorderDark')};
  border: 0;
`;

export const PasteMDXProvider: React.FC<PasteMDXProviderProps> = (props: PasteMDXProviderProps): React.ReactElement => {
  return (
    <MDXProvider
      components={{
        h1: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h1" marginBottom={32} fontSize="fontSize80" lineHeight="lineHeight60" />
        ),
        h2: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h2" marginTop={20} marginBottom={20} fontSize="fontSize60" lineHeight="lineHeight40" />
        ),
        h3: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h3" marginTop={20} marginBottom={20} fontSize="fontSize50" lineHeight="lineHeight30" />
        ),
        h4: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h4" marginTop={20} marginBottom={20} fontSize="fontSize30" />
        ),
        h5: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h5" marginTop={20} marginBottom={20} fontSize="fontSize20" />
        ),
        h6: (props: React.ComponentProps<typeof Text>): React.ReactElement => (
          <Text {...props} as="h6" marginTop={20} marginBottom={20} fontSize="fontSize20" />
        ),
        p: (props: React.ComponentProps<'p'>): React.ReactElement => <p {...props} />,
        ul: (props: React.ComponentProps<'ul'>): React.ReactElement => <StyledUl {...props} />,
        ol: (props: React.ComponentProps<'ol'>): React.ReactElement => <StyledOl {...props} />,
        li: (props: React.ComponentProps<'li'>): React.ReactElement => <StyledLi {...props} />,
        blockquote: (props: React.ComponentProps<'blockquote'>): React.ReactElement => <blockquote {...props} />,
        table: (props: React.ComponentProps<'table'>): React.ReactElement => <table {...props} />,
        tr: (props: React.ComponentProps<'tr'>): React.ReactElement => <tr {...props} />,
        th: (props: React.ComponentProps<'th'>): React.ReactElement => <th {...props} />,
        td: (props: React.ComponentProps<'td'>): React.ReactElement => <td {...props} />,
        pre: (props: React.ComponentProps<'pre'>): React.ReactElement => <pre {...props} />,
        code: (props: React.ComponentProps<'code'>): React.ReactElement => <StyledCode {...props} />,
        em: (props: React.ComponentProps<'em'>): React.ReactElement => <em {...props} />,
        strong: (props: React.ComponentProps<'strong'>): React.ReactElement => <strong {...props} />,
        del: (props: React.ComponentProps<'del'>): React.ReactElement => <del {...props} />,
        hr: (props: React.ComponentProps<'hr'>): React.ReactElement => <StyledHr {...props} />,
        a: (props: React.ComponentProps<'a'>): React.ReactElement => <a {...props} />, // eslint-disable-line jsx-a11y/anchor-has-content
        img: (props: React.ComponentProps<'img'>): React.ReactElement => <img {...props} />, // eslint-disable-line jsx-a11y/alt-text
        content: (props: React.ComponentProps<'div'>): React.ReactElement => <StyledContent {...props} />,
      }}
    >
      {props.children}
    </MDXProvider>
  );
};
