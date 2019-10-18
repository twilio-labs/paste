import {DOMAttributes} from 'react';

// Typescript consumers will get this no className passthrough but not js consumers
// Might want to come up with some way to prevent the injection of these types with js
type BaseComponent = {
  className?: never;
  style?: never;
};

type Events = DOMAttributes<'div'>;

type StaticDiv = BaseComponent & Omit<React.ComponentProps<'div'>, keyof Events>;
type StaticLabel = BaseComponent & Omit<React.ComponentProps<'label'>, keyof Events>;

// Not a fan of having static interactiveX wish we could do
// interactive<T> = React.ComponentProps<T>; but couldn't make it work
type InteractiveDiv = BaseComponent & React.ComponentProps<'div'>;
type InteractiveButton = BaseComponent & React.ComponentProps<'button'>;
type InteractiveAnchor = BaseComponent & React.ComponentProps<'a'>;
type InteractiveInput = BaseComponent & React.ComponentProps<'input'>;
type InteractiveImage = BaseComponent & React.ComponentProps<'img'>;
type InteractiveSelect = BaseComponent & React.ComponentProps<'select'>;

export {
  Events,
  StaticDiv,
  StaticLabel,
  InteractiveDiv,
  InteractiveButton,
  InteractiveAnchor,
  InteractiveInput,
  InteractiveImage,
  InteractiveSelect,
};
