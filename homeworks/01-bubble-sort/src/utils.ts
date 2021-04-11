export function generateArray(size: number, limit: number = 200): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * limit));
}
