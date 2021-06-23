export function sentenceCase(str: string): string {
  return str
    .replace(/[a-z]/i, (letter: string) => {
      return letter.toUpperCase();
    })
    .trim();
}
