let students = [
  { name: "Rahul", marks: [80, 75, 90] },
  { name: "Anjali", marks: [85, 95, 88] },
  { name: "Kiran", marks: [70, 65, 72] }
];

for (let i = 0; i < students.length; i++) {

  let student = students[i];
  let total = 0;

  for (let j = 0; j < student.marks.length; j++) {
    total += student.marks[j];
  }

  let average = total / student.marks.length;

  console.log("Student:", student.name);
  console.log("Average Marks:", average);
  console.log("------------------");
}