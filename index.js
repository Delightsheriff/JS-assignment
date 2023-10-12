/*
// Create an array to store JAMB student objects
var jambStudents = [];

// Define JAMB student objects for 5 students
const student1 = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "555-555-5555",
  address: "123 Main Street, City, Country",
  age: 20,
  score: 79,
};

const student2 = {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phone: "555-555-5556",
  address: "456 Elm Street, City, Country",
  age: 21,
  score: 69,
};

const student3 = {
  firstName: "David",
  lastName: "Johnson",
  email: "david.johnson@example.com",
  phone: "555-555-5557",
  address: "789 Oak Street, City, Country",
  age: 19,
  score: 59,
};

const student4 = {
  firstName: "Sarah",
  lastName: "Brown",
  email: "sarah.brown@example.com",
  phone: "555-555-5558",
  address: "101 Pine Street, City, Country",
  age: 22,
  score: 89,
};

const student5 = {
  firstName: "Michael",
  lastName: "Lee",
  email: "michael.lee@example.com",
  phone: "555-555-5559",
  address: "222 Maple Street, City, Country",
  age: 20,
  score: 49,
};

// Push each student object into the array
jambStudents.push(student1);
jambStudents.push(student2);
jambStudents.push(student3);
jambStudents.push(student4);
jambStudents.push(student5);

console.log(jambStudents);

const arrOf15Items = [];
arrOf15Items.push("shpe");
arrOf15Items.push("FALL");
arrOf15Items.push("yarn");
arrOf15Items.push("npm");
arrOf15Items.push(6789);
arrOf15Items.push(567);
arrOf15Items.push("sudo");
arrOf15Items.push("sharp");
arrOf15Items.push("take");
arrOf15Items.push("sip");
arrOf15Items.push("stroll");
arrOf15Items.push("shpeef");
arrOf15Items.push("shpeyre");
arrOf15Items.push("eyre");
arrOf15Items.push("shore");
console.log(arrOf15Items);

if (jambStudents[3].score >= 70) {
  console.log(
    `${jambStudents[3].firstName} ${jambStudents[3].lastName} has passed excellently`
  );
} else if (jambStudents[3].score < 70) {
  console.log(
    `${jambStudents[3].firstName} ${jambStudents[3].lastName} has passed very well`
  );
} else if (jambStudents[3].score > 49 && jambStudents[3].score < 59) {
  console.log(
    `${jambStudents[3].firstName} ${jambStudents[3].lastName} has passed`
  );
} else if (jambStudents[3].score < 50) {
  console.log(
    `${jambStudents[3].firstName} ${jambStudents[3].lastName} has failed`
  );
}
*/
/*
const student = {
  name: "Amadi Sheriff Delight",
  age: 27,
  payments: true,
};

const gradeChecker = (student) => {
  if (student.payments && student.age > 16 && student.name.includes("a")) {
    console.log(`${student.name} is in Grade A`);
    return;
  }
  if ((student.payments && student.age > 16) || student.name.includes("a")) {
    console.log(`${student.name} is in Grade B`);
    return;
  }
  if (student.payments || (student.age > 16 && student.name.includes("a"))) {
    console.log(`${student.name} is in Grade C`);
    return;
  }
  console.log(`${student.name} is not eligible for any grade.`);
};
gradeChecker(student);
*/
//map, filter and forEach
const students = [
  {
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70,
  },
  {
    name: "raja",
    gender: "Male",
    physics: 30,
    maths: 25,
    english: 40,
  },
  {
    name: "usha",
    gender: "Female",
    physics: 67,
    maths: 45,
    english: 78,
  },
  {
    name: "priya",
    gender: "Female",
    physics: 56,
    maths: 46,
    english: 78,
  },
  {
    name: "Sundar",
    gender: "Male",
    physics: 12,
    maths: 67,
    english: 67,
  },
  {
    name: "Kavitha",
    gender: "Female",
    physics: 78,
    maths: 71,
    english: 67,
  },
  {
    name: "Dinesh",
    gender: "Male",
    physics: 56,
    maths: 45,
    english: 67,
  },
  {
    name: "Hema",
    gender: "Female",
    physics: 71,
    maths: 90,
    english: 23,
  },
  {
    name: "Gowri",
    gender: "Female",
    physics: 100,
    maths: 100,
    english: 100,
  },
  {
    name: "Ram",
    gender: "Male",
    physics: 78,
    maths: 55,
    english: 47,
  },
  {
    name: "Murugan",
    gender: "Male",
    physics: 34,
    maths: 89,
    english: 78,
  },
  {
    name: "Jenifer",
    gender: "Female",
    physics: 67,
    maths: 88,
    english: 90,
  },
];
//1). using forEach, calculate everybods average,
students.forEach((student) => {
  student.average = (student.english + student.physics + student.maths) / 3;
  console.log(student.average);
});
// students;
//2). after calculating the average, filter only average with above 100
let above_100 = students.filter((student) => {
  return student.average >= 100;
});
//3). after calcukating average, and filtering, return the names
let above_100_student = above_100.map((student) => {
  console.log(student.name);
});

//4). return male
let Males = students
  .filter((student) => {
    return student.gender === "Male";
  })
  .map((student) => {
    console.log(student.name);
  });

//5). return female
let Females = students
  .filter((student) => {
    return student.gender === "Female";
  })
  .map((student) => {
    console.log(student.name);
  });

