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
