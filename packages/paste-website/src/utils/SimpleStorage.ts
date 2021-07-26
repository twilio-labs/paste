const BASE_KEY = 'paste-website';

let storage: Storage = {
  getItem: () => null,
  setItem: () => null,
  removeItem: () => null,
  clear: () => null,
  length: 0,
  key: () => null,
};

try {
  storage = window.localStorage;
  // eslint-disable-next-line unicorn/prefer-optional-catch-binding
} catch (error) {
  // Ignore
}

const namespaceKey = (key: string): string => `${BASE_KEY}/${key}`;

// Simple localStorage wrapper w/ namespace support
export const SimpleStorage = {
  get(key: string): string | null {
    return storage.getItem(namespaceKey(key));
  },
  set(key: string, value: string): void {
    storage.setItem(namespaceKey(key), value);
  },
  remove(key: string): void {
    storage.removeItem(namespaceKey(key));
  },
  clearAll(): void {
    storage.clear();
  },
};
