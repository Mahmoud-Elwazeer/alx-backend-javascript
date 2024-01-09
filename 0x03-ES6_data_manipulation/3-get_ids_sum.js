export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) { return 0; }

  const sum = arr.reduce((total, value) => total + value.id, 0);

  return sum;
}
