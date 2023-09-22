import { useTheme } from '@twilio-paste/theme';
import { Box } from '@twilio-paste/box';

const PopularSectionHeader = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      aria-hidden
      color="colorTextWeak"
      fontWeight="fontWeightBold"
      marginBottom="space110"
      marginTop="space0"
      position="relative"
      _after={{
        borderTopColor: 'colorBorderWeak',
        borderTopStyle: 'solid',
        borderTopWidth: 'borderWidth10',
        content: `""`,
        display: 'block',
        height: '1px',
        marginLeft: 'space160',
        position: 'absolute',
        top: '50%',
        width: `calc(100% - ${theme.space.space160})`,
      }}
    >
      Popular
    </Box>
  );
};

export { PopularSectionHeader };
