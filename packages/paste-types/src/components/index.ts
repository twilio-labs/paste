import {DOMEvents} from '../events';

export interface StaticComponent extends React.AriaAttributes {}
export interface InteractiveComponent extends React.AriaAttributes, DOMEvents {}
