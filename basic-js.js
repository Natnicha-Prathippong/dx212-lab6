let name = "Peter";
let age =20;
let graduated = true;
let gpa = 3.75;

let student1 = {
    name : "Manee",
    age : 19,
    graduated : false,
    gpa : 2.65
};

let student2 = {
    name : name,
    age : age,
    graduated : graduated,
    gpa : gpa
};
console.log(student1.name);
console.log(student2);

let grade = ["A", "B", "C", "D", "F"];
let scores = [90, 80, 70, 60, 50];
let students = [student1, student2];

console.log(students[1].gpa);