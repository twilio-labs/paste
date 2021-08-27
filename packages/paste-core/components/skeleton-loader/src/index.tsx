import * as React from 'react';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {css, styled} from '@twilio-paste/styling-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import type {LayoutProps, BorderRadiusProps} from '@twilio-paste/style-props';

const AnimatedSkeleton = animated(Box);

const StyledAnimatedSkeleton = styled(AnimatedSkeleton)(() =>
  css({
    background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.3) 60%, transparent)`,
  })
);

export interface SkeletonLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<BoxElementProps, 'element'>,
    Omit<LayoutProps, 'verticalAlign'>,
    BorderRadiusProps {}

const SkeletonLoader = React.forwardRef<HTMLDivElement, SkeletonLoaderProps>(
  (
    {
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderRadius = 'borderRadius20',
      borderTopLeftRadius,
      borderTopRightRadius,
      element = 'SKELETON_LOADER',
      display,
      height = 'sizeIcon20',
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      size = null,
      width = null,
      ...props
    },
    ref
  ) => {
    const animatedSkeletonStyles = useSpring({
      loop: {delay: 700, reset: true},
      from: {translateX: '-100%', skew: '155deg'},
      to: {translateX: '100%', skew: '155deg'},
      config: {
        mass: 0.1,
        tension: 80,
        friction: 50,
      },
    });

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-busy="true"
        backgroundColor="colorBackgroundStrong"
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderRadius={borderRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        display={display}
        element={element}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        overflow="hidden"
        pointerEvents="none"
        position="relative"
        userSelect="none"
        size={size}
        width={width}
        ref={ref}
      >
        <StyledAnimatedSkeleton
          bottom={0}
          left={0}
          position="absolute"
          right={0}
          top={0}
          style={animatedSkeletonStyles}
        />
      </Box>
    );
  }
);

SkeletonLoader.displayName = 'SkeletonLoader';

export {SkeletonLoader};
