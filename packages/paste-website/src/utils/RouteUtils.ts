import {PASTE_PACKAGE_PREFIX} from '../constants';

// Gets the current browser pathname
export function getCurrentPathname(): string {
  if (typeof window === `undefined` || window.location == null) {
    return '';
  }
  return window.location.pathname;
}

// Returns `button` from `@twilio-paste/button`
export function getNameFromPackageName(packageName: string): string {
  return packageName.replace(PASTE_PACKAGE_PREFIX, '');
}

// Returns `/components/button` from a category constant and package name
export function getPackagePath(categoryRoute: string, packageName: string): string {
  return `${categoryRoute}/${getNameFromPackageName(packageName)}`;
}
