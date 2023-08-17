export function merge(collection1: number[], collection2: number[]): number[] {
  let merged: number[] = [], i = 0, j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      merged.push(collection1[i]);
      i++;
    } else {
      merged.push(collection2[j]);
      j++;
    }
  }

  merged.push(...collection1.slice(i));
  merged.push(...collection2.slice(j));

  return merged;
}

