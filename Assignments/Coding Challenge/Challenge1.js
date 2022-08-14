let Mark_mass, Mark_height, John_mass, John_height;
Mark_mass = prompt("Enter Mark's mass");
Mark_height = prompt("Enter Mark's height");
John_mass = prompt("Enter John's mass");
John_height = prompt("Enter John's height");



let Mark_BMI = Mark_mass / (Mark_height * Mark_height);
let John_BMI = John_mass /(John_height ** 2);
console.log(Mark_BMI, John_BMI);

let markHigherBMI = Mark_BMI > John_BMI;

console.log(markHigherBMI);


