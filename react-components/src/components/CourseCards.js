import React from 'react';

function CourseCard(props){
  console.log(props);

  const courseNum = props.courseNum;
  const courseImg = props.courseImg;

  let classList = "card col-6 col-md-6 col-lg-4";
  if(props.currentCourse) { //if has this variable (and its true)
    classList += " bg-warning";
  }


  return (
    <div className={classList}>
      <img src={courseImg} alt="chrome browser logo"/>
      <h3>{courseNum}</h3>
    </div>
  )
}

export function CourseCardDeck(props){

  //what I have: [{}, {}]
  const COURSE_DATA = [
    {"number": "INFO 340", "title": "Client Side Development", "img": "chrome-logo-150w.png"},
    {"number": "INFO 201", "title": "Foundational Skills for Data Science", "img": "rlogo-150w.png"},
    {"number": "INFO 443", "title": "Software Architecture", "img": "rockefeller-avatar-150w.png"},
    {"number": "INFO 448", "title": "Android Development", "img": "android-icon-150w.png"},
    {"number": "LIS 511", "title": "Introduction to Programming", "img": "python-logo-150w.png"}
  ]

  const elemArray = COURSE_DATA.map((courseObj) => {
    //do something to the courseObj
    const domElem = <CourseCard 
      courseNum={courseObj.number} 
      courseImg={"/img/"+courseObj.img} />
    return domElem;
  })

  console.log(elemArray); //[<>, <>]

  //what I can render: [<>, <>]
//   const elemArray = [
//     <CourseCard 
//     courseNum={COURSE_DATA[0].number} 
//     courseImg={"/img/"+COURSE_DATA[0].img} 
//     currentCourse={true} />,
//   <CourseCard 
//     courseNum={COURSE_DATA[1].number} 
//     courseImg={"/img/"+COURSE_DATA[1].img}  />,
//   <CourseCard 
//     courseNum={COURSE_DATA[2].number} 
//     courseImg={"/img/"+COURSE_DATA[2].img}  />
// ]

  return (
    <div id="cardDeck" className="row collapse show">
      {elemArray}
    </div>
  )
}

