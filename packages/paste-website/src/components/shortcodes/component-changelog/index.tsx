import * as React from 'react';
import Parser from 'html-react-parser';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Box} from '@twilio-paste/box';

interface ComponentChangelogProps {
  data?: {
    childMarkdownRemark: {
      html: string;
      rawMarkdownBody: string;
    };
  };
}

export const StyledChangelogContent = styled(Box)`
  h1 {
    font-size: ${themeGet('fontSizes.fontSize100')};
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};
    margin-top: ${themeGet('spacings.space60')};
    margin-bottom: ${themeGet('spacings.space60')};
  }

  h2 {
    font-size: ${themeGet('fontSizes.fontSize60')};
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};
    margin-top: ${themeGet('spacings.space60')};
    margin-bottom: ${themeGet('spacings.space60')};
  }

  h3 {
    font-size: ${themeGet('fontSizes.fontSize50')};
    font-weight: ${themeGet('fontWeights.fontWeightSemibold')};
    margin-top: ${themeGet('spacings.space60')};
    margin-bottom: ${themeGet('spacings.space60')};
  }

  p,
  ul {
    font-size: ${themeGet('fontSizes.fontSize20')};
    margin-top: ${themeGet('spacings.space50')};
    margin-bottom: ${themeGet('spacings.space50')};
  }

  li {
    font-size: ${themeGet('fontSizes.fontSize20')};
    margin-left: ${themeGet('spacings.space60')};
  }

  a {
    color: ${themeGet('textColors.colorTextLink')};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ComponentChangelog: React.FC<ComponentChangelogProps> = ({data}) => {
  if (data == null) {
    return null;
  }
  return <StyledChangelogContent marginTop="space120">{Parser(`${data}`)}</StyledChangelogContent>;
};

export {ComponentChangelog};
