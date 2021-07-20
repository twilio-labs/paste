const BASE_KEY = 'paste-website';

const namespaceKey = (key: string): string => `${BASE_KEY}/${key}`;

// Simple localStorage wrapper w/ namespace support
export const SimpleStorage = {
  get(key: string): string | null {
    return localStorage.getItem(namespaceKey(key));
  },
  set(key: string, value: string): void {
    localStorage.setItem(namespaceKey(key), value);
  },
  remove(key: string): void {
    localStorage.removeItem(namespaceKey(key));
  },
  clearAll(): void {
    localStorage.clear();
  },
};
