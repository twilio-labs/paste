import {TokenCategory} from '../types';

export const isColorCategory = (category: TokenCategory): boolean =>
  category === 'background-color' || category === 'border-color' || category === 'color' || category === 'text-color';
