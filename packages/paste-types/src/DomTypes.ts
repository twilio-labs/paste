import {DOMAttributes} from 'react';
/* eslint-disable @typescript-eslint/no-empty-interface */
// This rule complains when we omit even though our type is not equivalent to the supertype

// Typescript consumers will get this no className passthrough but not js consumers
// Might want to come up with some way to prevent the injection of these types with js
type AttributesToDrop = 'className' | 'style';

export interface Events extends DOMAttributes<'div'> {}

// Not a fan of having static interactiveX wish we could do
// interactive<T> = React.ComponentProps<T>; but couldn't make it work ¯\_(ツ)_/¯
export interface InteractiveDiv extends Omit<React.ComponentProps<'div'>, AttributesToDrop> {}
export interface InteractiveButton extends Omit<React.ComponentProps<'button'>, AttributesToDrop> {}
export interface InteractiveLabel extends Omit<React.ComponentProps<'label'>, AttributesToDrop> {}
export interface InteractiveAnchor extends Omit<React.ComponentProps<'a'>, AttributesToDrop> {}
export interface InteractiveInput extends Omit<React.ComponentProps<'input'>, AttributesToDrop> {}
export interface InteractiveImage extends Omit<React.ComponentProps<'img'>, AttributesToDrop> {}
export interface InteractiveSelect extends Omit<React.ComponentProps<'select'>, AttributesToDrop> {}

// Unfortunately we can't extend BaseCompoment for these types because Omit
export interface StaticDiv extends Omit<InteractiveDiv, keyof Events> {}
export interface StaticLabel extends Omit<InteractiveLabel, keyof Events> {}

/* eslint-enable @typescript-eslint/no-empty-interface */
