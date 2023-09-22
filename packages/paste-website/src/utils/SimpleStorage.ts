/** @module SimpleStorage */

/** The namespace for all storage keys in SimpleStorage. */
const BASE_KEY = "paste-website";

/** Helper function to namespace a provided key. */
const namespaceKey = (key: string): string => `${BASE_KEY}/${key}`;

/** The fallback behavior for SimpleStorage. Used in non-browser environments. */
const STORAGE_SHIM: Storage = {
  getItem: () => null,
  setItem: () => null,
  removeItem: () => null,
  clear: () => null,
  length: 0,
  key: () => null,
};

let storage: Storage;
try {
  storage = window.localStorage;
  // eslint-disable-next-line unicorn/prefer-optional-catch-binding
} catch (error) {
  storage = STORAGE_SHIM;
}

/**
 * SimpleStorage is a localStorage wrapper that is safe to use in non-browser environments.
 */
export const SimpleStorage = {
  /**
   * Get a value from storage by key.
   * @param {string} key - The key to get the value for.
   * @return {string} The value stored at the provided key.
   */
  get(key: string): string | null {
    return storage.getItem(namespaceKey(key));
  },
  /**
   * Set a value into storage by key.
   * @param {string} key - The key to set the value for.
   * @param {string} value - The value to set.
   */
  set(key: string, value: string): void {
    storage.setItem(namespaceKey(key), value);
  },
  /**
   * Removes a value from storage by key.
   * @param {string} key - The key to remove the value for.
   */
  remove(key: string): void {
    storage.removeItem(namespaceKey(key));
  },
  /**
   * Completely empty the storage.
   */
  clearAll(): void {
    storage.clear();
  },
};
