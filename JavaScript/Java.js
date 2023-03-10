const courseList = [
    { code: "ACIT 1620", name: "Fundamental Web Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1420", name: "System Administration" },
  ];

let userNumber = prompt("Enter a 4-digit number:");

while (userNumber.length !== 4 || isNaN(userNumber)) {
    userNumber = prompt("Invalid input. Please enter a 4-digit number:");
  };

let courseFound = false;

for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(userNumber)) {
        console.log(`Yes, I am taking the course: ${courseList[i].code} --> ${courseList[i].name}`);
      courseFound = true;
      break;
    }
  };
  
if (!courseFound) {
    const newCourse = { code: `ACIT ${userNumber}`, name: null };
    courseList.push(newCourse);
    console.log(`Added new course: ${newCourse.code}`);
  }; 