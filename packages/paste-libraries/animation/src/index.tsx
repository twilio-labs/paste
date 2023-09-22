import { animated, useSpring, useTransition, useTrail, useSprings, useChain, interpolate } from '@react-spring/web';
import type {
  AnimatedProps,
  UseSpringProps,
  UseTransitionProps,
  UseTrailProps,
  UseSpringsProps,
} from '@react-spring/web';
import { Globals } from '@react-spring/shared';

import { useReducedMotion, isRenderingOnServer } from './useReducedMotion';

export {
  Globals,
  animated,
  useSpring,
  useTransition,
  useTrail,
  useSprings,
  useChain,
  interpolate,
  useReducedMotion,
  isRenderingOnServer,
};
export type { AnimatedProps, UseSpringProps, UseTransitionProps, UseTrailProps, UseSpringsProps };
