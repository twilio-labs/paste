import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {useSpring, animated} from '@twilio-paste/animation-library';

const AnimatedCard = animated(Card);

interface GetStartedCardProps {
  show: boolean;
}
export const GetStartedCard: React.FC<GetStartedCardProps> = ({show, children}) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(25px)',
    config: {duration: 1000},
  });

  return (
    // @ts-ignore this is technically fine, but the typings are incorrect.
    <AnimatedCard style={props} opacity={0} padding="space70">
      {children}
    </AnimatedCard>
  );
};
