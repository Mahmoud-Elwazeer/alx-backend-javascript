export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Accepted Only array');
  }
  return new Set(arr);
}
