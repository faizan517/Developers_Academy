
var userName = prompt("your name");

var totalMarks = 100;
var obtainedMarks = 0;

var q1 = prompt("favorite color");
var q2 = prompt("favorite cold drink");
var q3 = prompt("favorite country");
var q4 = prompt("favorite youtuber");
var q5 = prompt("favorite sport");
var q6 = prompt("favorite movie");
var q7 = prompt("favorite ice cream");
var q8 = prompt("favorite actor");
var q9 = prompt("favorite day");
var q10 = prompt("favorite game");

if (q1 == "black") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q2 == "dew") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q3 == "pakistan") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q4 == "junajo") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q5 == "circket") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q6 == "john wick") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q7 == "chocolate") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q8 == "jhony") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q9 == "sunday") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

if (q10 == "pubg") {
  obtainedMarks = obtainedMarks + 10;
} else {
  obtainedMarks = obtainedMarks - 5;
}

var percent = (obtainedMarks / totalMarks) * 100;
var grade;
if (percent >= 80) {
  grade = "A+";
} else if (percent >= 70) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 50) {
  grade = "C";
} else if (percent >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}
console.log("Name: " + userName  );
console.log("Total Marks: " + totalMarks  );
console.log("Obtained Marks: " + obtainedMarks  );
console.log("Percentarge: " + percent );
console.log("Grade: " + grade );
