//------------------------------------| Create courseArray Function |-----------------------------------------------------
function createCourseArray() {
  const courseElements = document.querySelectorAll('.courses');

  const courseArray = [];

  courseElements.forEach(element => {
    const code = element.querySelector('a').textContent;
    const date = element.querySelector('.comehere').textContent;
    courseArray.push({ code, date });
  });

  return courseArray;
}
// --------------------------------------| Find Course Function |----------------------------------------------------------
function findCourse(courseArray) {
  let userNumber = prompt("Enter a 4-digit number:") ;

  while (userNumber.length !== 4 || isNaN(userNumber)) {
    userNumber = prompt("This is not a valid 4 digit number!");
  }

  let courseFound = false ;
  for (let i = 0; i < courseArray.length; i++) {
    if (courseArray[i].code.includes(userNumber)) {
      const existedcourse = document.querySelector(`.course-${userNumber}`) ; 
      console.log(existedcourse) ; 
      existedcourse.classList.add('green-background');
      courseFound = true;
      break;
    }
  }

  if (!courseFound) {
    const courses_container = document.querySelector('article') ; 
    const newCourse = document.createElement('div');
    newCourse.classList.add('courses') ; 
    newCourse.classList.add(`${userNumber}`) ; 
    newCourse.classList.add(`special`) ; 
    const courseName = document.createElement('a') ; 
    courseName.href = `https://learn.bcit.ca/d2l/home/#${userNumber}` ; 
    courseName.target = '_blank' ; 
    courseName.textContent = `ACIT ${userNumber} ` ; 
    const description = document.createElement('p') ; 
    description.textContent = 'None' ; 
    const courseDate = document.createElement('p') ; 
    courseDate.classList.add('comehere') ; 
    courseDate.textContent = 'Fall-2020' ; 
    newCourse.appendChild(courseName) ; 
    newCourse.appendChild(description) ; 
    newCourse.appendChild(courseDate) ; 
    courses_container.appendChild(newCourse) ; 
    const lastcourse = document.querySelector('.special') ;
    lastcourse.classList.remove('special');
   }
  }

  //--------------------------------------------| CAlling Functions |------------------------------------------------------
  
  const courseArray = createCourseArray();
  findCourse(courseArray);
  