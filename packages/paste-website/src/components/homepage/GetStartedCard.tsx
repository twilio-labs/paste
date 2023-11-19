import { animated, useSpring } from "@twilio-paste/animation-library";
import { Card } from "@twilio-paste/card";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCard = animated(Card);
interface GetStartedCardProps {
  animationDelay?: number;
}
export const GetStartedCard: React.FC<React.PropsWithChildren<GetStartedCardProps>> = ({
  animationDelay = 0,
  children,
}) => {
  const [show, setShow] = React.useState(false);

  const handleVisibilityChange = (isVisible: boolean): void => {
    if (!show) {
      setShow(isVisible);
    }
  };

  const props = useSpring({
    height: "100%", // FIXME: hackily fixes equal card heights
    width: "100%", // FIXME: hackily fixes stacked Card widths
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0px)" : "translateY(25px)",
    delay: animationDelay,
    config: { mass: 1, tension: 280, friction: 40 },
  });
  // Destructuring this to bypass TS warning that is incorrect
  const cardProps = { opacity: 0 };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={90}>
      <AnimatedCard style={props} {...cardProps} padding="space70">
        {children}
      </AnimatedCard>
    </VisibilitySensor>
  );
};
