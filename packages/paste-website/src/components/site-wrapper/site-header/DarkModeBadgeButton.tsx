import * as React from 'react';
import {Box} from '@twilio-paste/box';

type DarkModeBadgeButtonProps = {
  onClick: () => void;
};
export const DarkModeBadgeButton: React.FC<DarkModeBadgeButtonProps> = ({children, onClick, ...props}) => {
  const handleClick = (): void => {
    onClick();
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };
  return (
    <Box
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      cursor="pointer"
      textDecoration="underline"
      borderRadius="borderRadius10"
      backgroundColor="colorBackgroundNew"
      paddingX="space30"
      color="colorTextNew"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight20"
      outline="none"
      _hover={{textDecoration: 'none'}}
      _focus={{boxShadow: 'shadowFocus', textDecoration: 'none'}}
      {...props}
    >
      {children}
    </Box>
  );
};
