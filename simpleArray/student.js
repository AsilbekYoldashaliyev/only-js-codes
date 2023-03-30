
// grades student

// function gradingStudents(grades) {
//   let multiple = 5;
//   let numberOfRounds = 2;
//   let minimum = 38;

//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= minimum && grades[i] % multiple > numberOfRounds) {
//       grades[i] = grades[i] + (multiple - (grades[i] % multiple));
//     }
//   }
//   return grades;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

/**
 * 1. 0...100
 * 2. less than 40
 * ---------------
 * 3. multiple = 5
 * 4. numberOfRounds = 2
 * 5. minimum = 38
 * 6. for loop grades.length
 * 7. if grades[i] >= minimum && grades[i] % multiple > numberOfRounds
 * 8. grades[i] = grades[i] + (  multiple -  (grades[i] % multiple) )
 * 9. return grades
 */
