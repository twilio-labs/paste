"use client";
import { Globals } from "@react-spring/shared";
import { animated, interpolate, useChain, useSpring, useSprings, useTrail, useTransition } from "@react-spring/web";
import type {
  AnimatedProps,
  UseSpringProps,
  UseSpringsProps,
  UseTrailProps,
  UseTransitionProps,
} from "@react-spring/web";

import { isRenderingOnServer, useReducedMotion } from "./useReducedMotion";

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
