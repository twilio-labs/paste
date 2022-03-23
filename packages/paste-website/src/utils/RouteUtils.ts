import {kebabCase, startCase, toLower} from 'lodash';
// Gatsby uses @reach/router under the hood
import {useLocation} from '@reach/router';
import {PASTE_PACKAGE_PREFIX, SidebarCategoryRoutes} from '../constants';

// Gets the current browser pathname
export function useLocationPathname(): string {
  const {pathname} = useLocation();
  return pathname;
}

export function useLocationOrigin(): string {
  const {origin} = useLocation();
  // By default, assume the origin is our own domain
  return origin || 'https://paste.twilio.design';
}

export function useOpengraphServiceUrl(path: string): string {
  const origin = useLocationOrigin();
  return `${origin}/.netlify/functions/opengraph/${path}`;
}

// Returns "aspect-ratio" from "@twilio-paste/aspect-ratio"
export function getNameFromPackageName(packageName: string): string {
  return packageName.replace(PASTE_PACKAGE_PREFIX, '');
}

// Returns "Aspect Ratio" from "@twilio-paste/aspect-ratio"
export function getHumanizedNameFromPackageName(packageName: string): string {
  return startCase(toLower(getNameFromPackageName(packageName)));
}

// Returns `/components/button` from a category constant and package name
export function getPackagePath(categoryRoute: string, packageName: string): string {
  return `${categoryRoute}/${packageName.replace(/\s+/g, '-').toLowerCase()}`;
}

export function slugify(text: string): string {
  return kebabCase(text.toLowerCase().replace(/[&+]/g, '-and-'));
}

export const getCategoryNameFromRoute = (categoryRoute: string): string => {
  switch (categoryRoute) {
    case SidebarCategoryRoutes.FOUNDATIONS:
      return 'Foundations';
    case SidebarCategoryRoutes.COMPONENTS:
      return 'Components';
    case SidebarCategoryRoutes.PRIMITIVES:
      return 'Primitives';
    case SidebarCategoryRoutes.TOKENS:
      return 'Tokens';
    case SidebarCategoryRoutes.LIBRARIES:
      return 'Libraries';
    case SidebarCategoryRoutes.CUSTOMIZATION:
      return 'Customization';
    case SidebarCategoryRoutes.CORE:
      return 'Core';
    case SidebarCategoryRoutes.PATTERNS:
      return 'Patterns';
    default:
      return 'Components';
  }
};
