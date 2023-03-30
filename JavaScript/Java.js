const courseList = [
  { code: "1620", name: "Fundamental Web Technologies"},
  { code: "1515", name: "Scripting for IT" },
  { code: "1420", name: "System Administration" } , 
];

// let courseFound = false;

// for (let i = 0; i < courseList.length; i++) {
//   if (courseList[i].code.includes(userNumber)) {
//     console.log(
//       `Yes, I am taking the course: ${courseList[i].code} --> ${courseList[i].name}`
//     );
//     courseFound = true;
//     break;
//   }
// }

// if (!courseFound) {
//   const newCourse = { code: `ACIT ${userNumber}`, name: null };
//   courseList.push(newCourse);
//   console.log(`Added new course: ${newCourse.code}`);
// }



// function createCourseArray() {
//   for (item of courseList) {
//     if (userNumber === item.code) {
//       console.log(`This course, ${userNumber}, already exists`);
//       return;
//     }
//   }
//   courseList.push({ code: userNumber, name: "None" , date : "Fall-2020" });
//   // console.log(`Course ${userNumber} has been added`);
//   return courseList
// }

// function findCourse(courseList) {
//   for (let i = 0; i < courseList.length; i++) {
//     if (courseList[i].code === userNumber) {
//       const existedcourse = document.querySelector(`.${userNumber}`);
//       existedcourse.classList.add('green-background');
//       return;
//     }
//     else {
//       const newcourse = document.createElement('div');
//       newcourse.classList.add('courses');
//       newcourse.textContent = `${userNumber} `
//       document.body.appendChild(newcourse)
//       // Add code to populate the new course here
//       return newcourse;
//     } 
//   } 
// }
// function createCourseArray() {
//   courseList.push({ code: userNumber, name: "None", date: "Fall-2020" });
//   console.log(`Course ${userNumber} has been added`);
//   return courseList;
// }

// function findCourse() {
//   let userNumber = prompt("Enter a 4-digit number:");

//   while (userNumber.length !== 4 || isNaN(userNumber)) {
//     userNumber = prompt("This is not a valid 4 digit number!");
// }
//   for (let i = 0; i < courseList.length; i++) {
//     if (courseList[i].code === userNumber) {
//       const existedcourse = document.querySelector(`.${userNumber}`);
//       existedcourse.classList.add('green-background');
//       return;
//     } else {
//       const newcourse = document.createElement('div');
//       newcourse.classList.add('courses');
//       const courseName = document.createElement('a');
//       courseName.href = `https://learn.bcit.ca/d2l/home/${userNumber}`;
//       courseName.target = '_blank';
//       courseName.textContent = `${userNumber} - ${courseList[i].name}`;
//       const courseDate = document.createElement('p');
//       courseDate.classList.add('dateinfo');
//       courseDate.textContent = courseList[i].date;
//       newcourse.appendChild(courseName);
//       newcourse.appendChild(courseDate);
//       document.body.appendChild(newcourse);
//     }
//   }
// }



//   if (!courseFound) {
//     const courses_container = document.querySelector('article' )
//     courses_container = document.createElement('div');
//     courses_container.classList.add('courses');
//     courses_container.classList.add(`${userNumber}`);
//     const courseName = document.createElement('a');
//     courseName.href = `https://learn.bcit.ca/d2l/home/${userNumber}`;
//     courseName.target = '_blank';
//     courseName.textContent = `ACIT ${userNumber} `;
//     const description = courses_container.createElement('p')
//     description.textContent = 'None'
//     const courseDate = courses_container.createElement('p');
//     courseDate.classList.add('comehere');
//     courseDate.textContent = 'Fall-2020';
//     courses_container.appendChild(courseName);
//     courses_container.appendChild(description)
//     courses_container.appendChild(courseDate);
//     document.body.appendChild(courses_container);
//   }
// }














function findCourse() {
  let userNumber = prompt("Enter a 4-digit number:");

  while (userNumber.length !== 4 || isNaN(userNumber)) {
    userNumber = prompt("This is not a valid 4 digit number!");
  }

  let courseFound = false;

  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code == userNumber) {
      // const articlethere = document.querySelector('article')
      const existedcourse = document.querySelector(`.course-${userNumber}`)
      console.log(existedcourse)
      existedcourse.classList.add('green-background');
      courseFound = true;
      break;
    }
  }

  if (!courseFound) {
    const courses_container = document.querySelector('article')
    const newCourse = document.createElement('div');
    newCourse.classList.add('courses')
    newCourse.classList.add(`${userNumber}`)
    newCourse.classList.add(`special`)
    const courseName = document.createElement('a')
    courseName.href = `https://learn.bcit.ca/d2l/home/${userNumber}`
    courseName.target = '_blank'
    courseName.textContent = `ACIT ${userNumber} `
    const description = document.createElement('p')
    description.textContent = 'None'
    const courseDate = document.createElement('p')
    courseDate.classList.add('comehere')
    courseDate.textContent = 'Fall-2020'
    newCourse.appendChild(courseName)
    newCourse.appendChild(description)
    newCourse.appendChild(courseDate)
    courses_container.appendChild(newCourse)
    const lastcourse = document.querySelector('.special') 
    lastcourse.classList.remove('special')
   }
}














findCourse() ; 