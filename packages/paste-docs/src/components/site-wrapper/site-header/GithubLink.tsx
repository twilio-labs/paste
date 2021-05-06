//import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import { Anchor } from "@twilio-paste/anchor";
import { Flex } from "@twilio-paste/flex";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import GithubIcon from "../../icons/GithubIcon";

const GithubLink: React.FC = () => {
  const theme = useTheme();

  return (
    <Anchor
      display="block"
      href="https://www.github.com/twilio-labs/paste"
      variant="inverse"
      onClick={
        () => {} /* TODO
        trackCustomEvent({
          category: 'Top Navigation',
          action: 'click-github',
          label: 'Github',
        })*/
      }
    >
      <Flex as="span" vAlignContent="center">
        <GithubIcon
          css={{
            height: theme.heights.sizeIcon30,
            width: theme.heights.sizeIcon30,
          }}
          title="View this project on github"
          color={theme.textColors.colorTextIconInverse}
        />
        <Text as="span" color="inherit" marginLeft="space30">
          GitHub
        </Text>
      </Flex>
    </Anchor>
  );
};

export { GithubLink };
