export default function updateStudentGradeByCity(arr, city, newgrade) {
  if (!Array.isArray(arr)) { return []; }

  const newarr = arr.filter((value) => {
    return value.location === city;
  }).map((value) => {
    const match_grade = newgrade.find(student => student.studentId === value.id);
    const result = match_grade ? match_grade.grade : 'N/A';

    return {...value, grade:result}
  })

  return (newarr);
}
