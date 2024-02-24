if(countCourseArray.length > 0) {
    for(i = 0; i < countCourseArray.length; i++) {
        countCourseArray.pop();
    };
    // PUSH TO THE ARRAY
    countCourseArray.push(courseObjectValues);
    // STRINGIFY THE ARRAY BECAUSE sessionStorage will only store strings and number values
    let stringifyCourseArray = JSON.stringify(countCourseArray);          
    // STORE IN SESSTIONSTORAGE
    sessionStorage.setItem('courseArray', stringifyCourseArray);
    // GET THE courseArray SESSION AND LOOP THROUGH IT
    let courseArray = sessionStorage.getItem('courseArray');
    // PARSE IT BACK TO NORMAL ARRAY
    let parseCourseArray = JSON.parse(courseArray);
    let parseCourseArrayLength = parseCourseArray.length;
                    // RUN LOOP
        // ----------------------------------------------
        for(i = 0; i < parseCourseArrayLength; i++) {
            if(sessionStorage.getItem(parseCourseArray[i].name)) {
                txt += `
                <div class=\"coupon-item\">
                <p class=\"couple-course-item\">${parseCourseArray[i].name}</p>
                <p  class=\"couple-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                </div>
                `;
            }
        }
    txt += `
        <div class=\"coupon-item\">
            <h5 class=\"total-coupon-title\">TOTAL</h5>
            <p clas=\"total-coupon-price\">&#8358;500.00K</p>
        </div>
    `; 
    document.getElementById('courses-shopping').innerHTML = txt;
    // ----------------------------------------------------``
} else {
      // PUSH TO THE ARRAY
      countCourseArray.push(courseObjectValues);
      // STRINGIFY THE ARRAY BECAUSE sessionStorage will only store strings and number values
      let stringifyCourseArray = JSON.stringify(countCourseArray);          
      // STORE IN SESSTIONSTORAGE
      sessionStorage.setItem('courseArray', stringifyCourseArray);
      // GET THE courseArray SESSION AND LOOP THROUGH IT
      let courseArray = sessionStorage.getItem('courseArray');
      // PARSE IT BACK TO NORMAL ARRAY
      let parseCourseArray = JSON.parse(courseArray);
      let parseCourseArrayLength = parseCourseArray.length;
                      // RUN LOOP
          // ----------------------------------------------
          for(i = 0; i < parseCourseArrayLength; i++) {
              if(sessionStorage.getItem(parseCourseArray[i].name)) {
                  txt += `
                  <div class=\"coupon-item\">
                  <p class=\"couple-course-item\">${parseCourseArray[i].name}</p>
                  <p  class=\"couple-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                  </div>
                  `;
              }
           }
            txt += `
                <div class=\"coupon-item\">
                    <h5 class=\"total-coupon-title\">TOTAL</h5>
                    <p clas=\"total-coupon-price\">&#8358;500.00K</p>
                </div>
            `; 
            document.getElementById('courses-shopping').innerHTML = txt;
            // ----------------------------------------------------
}


//  alert("courseObjectValues = " + courseObjectValues + "\n"  + "countCourseArray = " + countCourseArray + "\n" + "stringifyCourseArray = " + stringifyCourseArray + "\n" + "parseCourseArray = " + parseCourseArray + "\n" + "parseCourseArrayLength = " + parseCourseArrayLength + "\n" + "parseCourseArray[0].name = " + parseCourseArray[0].name);

// alert("courseObjectValues = " + courseObjectValues + "\n"  + "countCourseArray = " + countCourseArray + "\n" + "stringifyCourseArray = " + stringifyCourseArray + "\n" + "parseCourseArray = " + parseCourseArray + "\n" + "parseCourseArrayLength = " + parseCourseArrayLength + "\n" + "parseCourseArray[0].name = " + parseCourseArray[0].name + "\n" + "sessionStorage.getItem(parseCourseArray[0].name) = " + sessionStorage.getItem(parseCourseArray[0].name));

} else {
couponCount++;    
txt = ""; //This is reset txt, else it will had it to the previous values stored in javascript memory.
sessionStorage.setItem('couponCount', couponCount);
document.getElementById('coupon_update').innerHTML = couponCount;
document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
document.querySelector('.coupon-box').classList.add('coupon-box-styling');
// SET sessionStorage of input.name TO REFERENCE IT LATER IN THE LOOP
sessionStorage.setItem(inputCheckbox.name, inputCheckbox.name);
// CREATE THE VALUES TO AN OBJECT
courseObjectValues = {name: inputCheckbox.name, price: inputCheckbox.value};
// PUSH TO THE ARRAY
countCourseArray.push(courseObjectValues);
// STRINGIFY THE ARRAY BECAUSE sessionStorage will only store strings and number values
let stringifyCourseArray = JSON.stringify(countCourseArray);
// STORE IN SESSTIONSTORAGE
sessionStorage.setItem('courseArray', stringifyCourseArray);
// GET THE courseArray SESSION AND LOOP THROUGH IT
let courseArray = sessionStorage.getItem('courseArray');
// PARSE IT BACK TO NORMAL ARRAY
let parseCourseArray = JSON.parse(courseArray);
let parseCourseArrayLength = parseCourseArray.length;
// RUN LOOP
// ----------------------------------------------
for(i = 0; i < parseCourseArrayLength; i++) {
    if(sessionStorage.getItem(parseCourseArray[i].name)) {
        txt += `
            <div class=\"coupon-item\">
                <p class=\"couple-course-item\">${parseCourseArray[i].name}</p>
                <p  class=\"couple-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
            </div>
        `;
    }
} 
txt += `
<div class=\"coupon-item\">
    <h5 class=\"total-coupon-title\">TOTAL</h5>
    <p clas=\"total-coupon-price\">&#8358;500.00K</p>
</div>
`;
document.getElementById('courses-shopping').innerHTML = txt;
};
} else {
txt = "";
sessionStorage.removeItem(inputCheckbox.name);
couponCount = parseInt(sessionStorage.getItem('couponCount'));   
couponCount--; 
if(couponCount < 1) {
sessionStorage.clear();
document.querySelector('.coupon-box').classList.add('minimize-coupon-box');
document.querySelector('.coupon-box').classList.remove('coupon-box-styling');
} else {
sessionStorage.setItem('couponCount', couponCount);
document.getElementById('coupon_update').innerHTML = couponCount;
document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
document.querySelector('.coupon-box').classList.add('coupon-box-styling');

// GET THE courseArray SESSION AND LOOP THROUGH IT
let courseArray = sessionStorage.getItem('courseArray');
// PARSE IT BACK TO NORMAL ARRAY
let parseCourseArray = JSON.parse(courseArray);
let parseCourseArrayLength = parseCourseArray.length;
// RUN LOOP
// ----------------------------------------------
for(i = 0; i < parseCourseArrayLength; i++) {
    if(sessionStorage.getItem(parseCourseArray[i].name)) {
        txt += `
        <div class=\"coupon-item\">
            <p class=\"couple-course-item\">${parseCourseArray[i].name}</p>
            <p  class=\"couple-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
        </div>
        `;
    }
} 
txt += `
    <div class=\"coupon-item\">
        <h5 class=\"total-coupon-title\">TOTAL</h5>
        <p clas=\"total-coupon-price\">&#8358;500.00K</p>
    </div>
`;
document.getElementById('courses-shopping').innerHTML = txt;
};
}
}, 100);