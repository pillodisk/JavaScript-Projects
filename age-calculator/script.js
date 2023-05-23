function saveData() {
const day_input = document.getElementById('day').value;
const month_input = document.getElementById('month').value;
const year_input = document.getElementById('year').value;
const birthDate = new Date(year_input, month_input - 1, day_input);
const today = new Date();

const ageDate = new Date(today - birthDate);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.getUTCDate() - 1;

document.getElementById('y').textContent = years+" ";
  document.getElementById('m').textContent = months+" ";
  document.getElementById('d').textContent = days+" ";

// console.log(day_input+month_input+year_input)
// console.log(typeof parseInt(day_input))
// console.log(birthDate);
// console.log(today)
// console.log(today.getFullYear()-birthDate.getFullYear())
// console.log(birthDate);
// console.log(today);
// console.log("Age: " + years + " years, " + months + " months, " + days + " days");





// function calculateAge(dateString) {
//     var today = new Date(); // Get current date
//     var birthDate = new Date(dateString); // Convert input string to date
  
//     var age = today.getFullYear() - birthDate.getFullYear(); // Calculate the difference in years
  
//     // Check if the birthday hasn't occurred yet this year
//     var hasBirthdayPassed = (today.getMonth() > birthDate.getMonth()) ||
//       (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
//     // Subtract 1 from the age if the birthday hasn't occurred yet
//     if (!hasBirthdayPassed) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var inputDate = "12-12-1991"; // Example date in dd-mm-yyyy format
//   var age = calculateAge(inputDate);
//   console.log(age); // Output: 31 (depending on the current date)
  


}
