export function sortObjectsByProperty(
  arr: Record<string, any>[],
  property: string
): Record<string, any>[] {
  return arr.sort((a, b) => {
    // Convert to lowercase for case-insensitive comparison
    let valA = (a[property] || '').toLowerCase();
    let valB = (b[property] || '').toLowerCase();

    if (valA < valB) {
      return -1;
    }
    if (valA > valB) {
      return 1;
    }
    return 0;
  });
}
