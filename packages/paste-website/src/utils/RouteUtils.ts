import {kebabCase, startCase, toLower} from 'lodash';
import {PASTE_PACKAGE_PREFIX, SidebarCategoryRoutes} from '../constants';

const hasWindowObject = (): boolean => typeof window !== `undefined` && window.location != null;

// Gets the current browser pathname
export function getCurrentPathname(): string {
  if (!hasWindowObject()) {
    return '';
  }
  return window.location.pathname;
}

export function getCurrentPathHash(): string {
  if (!hasWindowObject()) {
    return '';
  }
  return window.location.hash;
}

export function getCurrentOrigin(): string {
  if (!hasWindowObject()) {
    // Be default, assume the origin is our own domain
    return 'https://paste.twilio.design';
  }
  return window.location.origin;
}

// Returns "aspect-ratio" from "@twilio-paste/aspect-ratio"
export function getNameFromPackageName(packageName: string): string {
  return packageName.replace(PASTE_PACKAGE_PREFIX, '');
}

// Returns "Aspect Ratio" from "@twilio-paste/aspect-ratio"
export function getHumanizedNameFromPackageName(packageName: string): string {
  return startCase(toLower(packageName.replace(PASTE_PACKAGE_PREFIX, '')));
}

// Returns `/components/button` from a category constant and package name
export function getPackagePath(categoryRoute: string, packageName: string): string {
  return `${categoryRoute}/${packageName.replace(/\s+/g, '-').toLowerCase()}`;
}

export function slugify(text: string): string {
  return kebabCase(text.toLowerCase().replace(/[&+]/g, '-and-'));
}

export function getOpengraphServiceUrl(path: string): string {
  return `${getCurrentOrigin()}/.netlify/functions/opengraph/${path}`;
}

export const getCategoryNameFromRoute = (categoryRoute: string): string => {
  switch (categoryRoute) {
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
