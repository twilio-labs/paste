import type {Attributes} from 'react';
import type {Interpolation, Theme} from '@emotion/react';
declare global {
  interface AttributesWithCssProp extends Attributes {
    css?: Interpolation<Theme>;
  }
}
export {};
