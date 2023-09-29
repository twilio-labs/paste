import { animated, useSpring } from "@twilio-paste/animation-library";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

const dashArray = 160;

export const DoodleCloud = (): JSX.Element => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();

  function handleVisibilityChange(isVisible: boolean): void {
    if (!show) {
      setShow(isVisible);
    }
  }

  const styles = useSpring({
    x: show ? 0 : -1 * dashArray,
    fill: show ? "#f6b1b1" : "#ffffff",
    config: {
      duration: 1000,
    },
  });

  return (
    <VisibilitySensor onChange={handleVisibilityChange}>
      <svg fill="none" height="59" width="134" viewBox="0 0 134 59" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <animated.path
            d="m133 58c-.391737-4.2175596-2.177033-7.7268268-5.310932-9.516875-4.495348-2.5756089-10.57049-1.0946338-15.765828 3.2967794 8.431989-19.9609692 5.709092-40.359792-7.346683-47.89988712-14.7254749-8.52526557-36.9967127 2.51765773-49.7506569 24.66145552-1.9281459 3.3507245-3.573605 6.8571723-4.919195 10.4827284-1.1803602-3.3615966-3.4950595-6.2040256-6.5439422-8.0358999-9.742061-5.6405836-24.4803802 1.6612678-32.9187904 16.3164826-1.94330804 3.3539367-3.43748646 6.9499448-4.4439725 10.6952161"
            fill={styles.fill}
          />
          <animated.path
            d="m93 35c-.0360077-3.7872138-1.3322865-6.8784867-3.868832-8.3593844-4.0008604-2.3305931-9.8501183.024277-14.5151215 5.3328503 4.5289739-13.2107406 2.83661-25.68507844-4.9730695-30.24511047-9.6660787-5.64440523-25.049387 2.99011861-34.3553883 19.28808577-.9747677 1.7064203-1.8627802 3.4620438-2.6605721 5.2600193-.1840396-4.9241873-1.9604216-8.9218019-5.3091418-10.8801475-6.9254893-4.0461686-17.93585716 2.1404232-24.59728973 13.8095735-1.05857132 1.8490942-1.96836643 3.7813004-2.72058507 5.7779288"
            stroke={theme.backgroundColors.colorBackgroundPrimaryStrongest}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
            strokeDashoffset={styles.x}
            strokeDasharray={`${dashArray} ${dashArray}`}
          />
        </g>
      </svg>
    </VisibilitySensor>
  );
};
