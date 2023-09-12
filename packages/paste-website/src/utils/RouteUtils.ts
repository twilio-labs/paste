import kebabCase from 'lodash/kebabCase';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import {useRouter} from 'next/router';

import {PASTE_PACKAGE_PREFIX, SidebarCategoryRoutes} from '../constants';

export const hasWindowObject = (): boolean => typeof window !== 'undefined' && window.location != null;

// Gets the current browser pathname
export function useLocationPathname(): string {
  const {pathname} = hasWindowObject() ? window.location : useRouter();
  return pathname;
}

// Gets the current url params
export function useLocationSearch(): string {
  return hasWindowObject() ? window.location.search : '';
}

export function useLocationOrigin(): string {
  const origin = hasWindowObject() ? window.location.origin : '';
  // By default, assume the origin is our own domain
  return origin || 'https://paste.twilio.design';
}

export function useOpengraphServiceUrl(path: string): string {
  const origin = useLocationOrigin();
  return `${origin}/api/opengraph/?componentRequested=${path}`;
}

// Returns "aspect-ratio" from "@twilio-paste/aspect-ratio"
export function getNameFromPackageName(packageName: string): string {
  return packageName?.replace(PASTE_PACKAGE_PREFIX, '');
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
    case SidebarCategoryRoutes.THEME:
      return 'Theme';
    case SidebarCategoryRoutes.PAGE_TEMPLATES:
      return 'Page templates';
    default:
      return 'Components';
  }
};
