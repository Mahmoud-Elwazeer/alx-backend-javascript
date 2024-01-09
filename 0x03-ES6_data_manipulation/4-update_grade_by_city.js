export default function updateStudentGradeByCity(arr, city, newgrade) {
  if (!Array.isArray(arr)) { return []; }

  const newarr = arr.filter((value) => value.location === city).map((value) => {
    const matchgrade = newgrade.find((student) => student.studentId === value.id);
    const result = matchgrade ? matchgrade.grade : 'N/A';

    return { ...value, grade: result };
  });

  return (newarr);
}
