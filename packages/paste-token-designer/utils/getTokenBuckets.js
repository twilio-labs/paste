export function getTokenBuckets(tokens) {
  return Object.entries(tokens).filter(([key, value]) => {
    return typeof value !== 'string';
  });
}
