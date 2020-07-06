
export function isValidString(string: any): boolean {
  return typeof string === 'string' && string.trim().length > 0;
}
