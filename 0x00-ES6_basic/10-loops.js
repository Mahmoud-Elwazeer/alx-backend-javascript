export default function appendToEachArrayValue(array, appendString) {
  const keys = array.keys();
  const newarray = [...array];

  for (const idx of keys) {
    const value = array[idx];
    newarray[idx] = appendString + value;
  }

  return newarray;
}
