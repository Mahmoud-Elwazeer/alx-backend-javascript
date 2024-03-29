export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' && typeof position !== 'number' && typeof value !== 'number') {
    throw new Error('Parameter is not a number!');
  }
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8array = new Int8Array(buffer);

  int8array[position] = value;
  return buffer;
}
