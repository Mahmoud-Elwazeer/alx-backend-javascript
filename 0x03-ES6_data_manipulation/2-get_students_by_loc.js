export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) { return []; }
  const newarr = arr.filter((value) => value.location === city);

  return newarr;
}
