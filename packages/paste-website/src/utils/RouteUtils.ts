import {kebabCase} from 'lodash';
import {PASTE_PACKAGE_PREFIX} from '../constants';

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

// Returns `button` from `@twilio-paste/button`
export function getNameFromPackageName(packageName: string): string {
  return packageName.replace(PASTE_PACKAGE_PREFIX, '');
}

// Returns `/components/button` from a category constant and package name
export function getPackagePath(categoryRoute: string, packageName: string): string {
  return `${categoryRoute}/${getNameFromPackageName(packageName)}`;
}

export function slugify(text: string): string {
  return kebabCase(text.toLowerCase().replace(/&/g, '-and-'));
}
