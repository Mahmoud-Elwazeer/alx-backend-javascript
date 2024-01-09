export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) { return []; }
  const newarr = arr.map((value) => value.id);

  return newarr;
}
