export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) && !(arr instanceof Array)) {
    throw new Error('unvalid parameters');
  }

  return arr.every((value) => set.has(value));
}
