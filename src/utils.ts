export function concatTexts(...texts: string[]): string {
  return texts
    .filter(Boolean)
    .map((text) => text.trim())
    .join(' ')
}
