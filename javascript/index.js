window.addEventListener('scroll', () => {
    document.getElementById("header").classList.toggle("sticky", window.scrollY > 0);
});
function closePromo() {
    document.getElementById('promo').style.maxHeight = "0";
}
function searchLecture() {
    if(document.forms['search-form']['search'].value == "") {
        window.alert("Search input is empty!");
        document.forms['search-form'].reset();
        return false;
    } else if(!document.forms['search-form']['search'].value.match(/^[a-zA-Z0-9_]*$/)) {
        window.alert('Invalid search value');
        document.forms['search-form'].reset();
        return false;
    } else if(document.forms['search-form']['search'].value == "HTML" || document.forms['search-form']['search'].value == "CSS" || document.forms['search-form']['search'].value == "JAVASCRIPT" || document.forms['search-form']['search'].value == "REACT" || document.forms['search-form']['search'].value == "VUE" || document.forms['search-form']['search'].value == "PYTHON" || document.forms['search-form']['search'].value == "MYSQL") {
        window.alert('You will be redirected to ' + document.forms['search-form']['search'].value +  ' page later');
        document.forms['search-form'].reset();
        return false;
    } else {
        window.alert('No Match Found');
        document.forms['search-form'].reset();
        return false;
    }     
};
const questions = document.querySelectorAll(".question-article");
    questions.forEach(function(question) {
    const eachBtn = question.querySelector(".question-btn");
    eachBtn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    })
});
    // document.getElementById('copyright_date').innerHTML = new Date().toDateString();
//CHECK IF sessionStorage('couponCounter') is set to display Counpon counter

// sessionStorage.clear();
// COUPON SCRIPT---------------------------------------------------------------------
// 
let couponCount;
let couponID;
let countCourseArray = [];
let courseObjectValues;
let i;
let txt;
let total;
let choices;
// On window load function
if(!sessionStorage.getItem('couponCount')) {
    couponCount = 0;
    document.getElementById('coupon_update').innerHTML = couponCount;
    document.querySelector('.coupon-box').classList.add('minimize-coupon-box');
    document.querySelector('.coupon-box').classList.remove('coupon-box-styling');
} else {
    total = 0;
    couponCount = sessionStorage.getItem('couponCount');
    document.getElementById('coupon_update').innerHTML = couponCount;
    document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
    document.querySelector('.coupon-box').classList.add('coupon-box-styling');
    // Set query to ensure that ticked labels remain ticked on window reload
    var checkedLabels = document.querySelectorAll('.course-checkbox').forEach(e => {
        if(sessionStorage.getItem(e.name)) {
            e.checked = true;
            e.parentElement.querySelector('.switch-btn').classList.add('switch-on');
            txt += `
            <div class=\"coupon-item\">       
                <p class=\"coupon-course-item\">${e.name}</p>
                <p  class=\"coupon-course-price\">&#8358;${e.value}.00K</p>
            </div>
            `;
            total += parseInt(e.value);
        };
    });
        txt +=  `
            <div class=\"coupon-item\">
                <h5 class=\"total-coupon-title\">TOTAL</h5>
                <p clas=\"total-coupon-price\">&#8358;${total}.00K</p>
            </div>
        `;
        document.getElementById('courses-shopping').innerHTML = txt;
        document.getElementById('courses-chosen').value = sessionStorage.getItem('choices');
        document.getElementById('total-price').value = sessionStorage.getItem('total');
}
if(!sessionStorage.getItem('couponID')) {
    let idArray = ["A", "a", "B", "b", "2", "C", "0", "c", "5", "D", "d", "E", "e", "8", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j" , "K", "k", "7", "L", "l", "3", "M", "m", "N", "n", "O", "o"];
    let new_id_permutation = "";
    let x;
    for(x = 0; x < 12; x++) {
        new_id_permutation += idArray[Math.floor(Math.random() * 32)];
    };
    sessionStorage.setItem('couponID', new_id_permutation);
    couponID = sessionStorage.getItem('couponID');
    document.getElementById('coupon-id').innerHTML = couponID;
    document.getElementById('coupon-hidden-input').value = couponID;
} else {
    couponID = sessionStorage.getItem('couponID');
    document.getElementById('coupon-id').innerHTML = couponID;
    document.getElementById('coupon-hidden-input').value = couponID;
}

// SELECT COURSE FUNCTION-------------------

function btnSwitch(switchBtn) {
    switchBtn.classList.toggle('switch-on');
    let inputCheckbox =  switchBtn.parentElement.querySelector('.course-checkbox');
        
        setTimeout(function() {
            courseObjectValues = {name: inputCheckbox.name, price: inputCheckbox.value};
            if(inputCheckbox.checked) {
                // SET sessionStorage of input.name TO REFERENCE IT LATER IN THE LOOP
                sessionStorage.setItem(inputCheckbox.name, inputCheckbox.name);
                if(!sessionStorage.getItem('couponCount')) { //IF THIS HAS NEVER BEEN SET, IT ALSO MEANS THAT NO ITEM HAS BEEN INITAILLY SET IN THE ARRAY TOO   
                    sessionStorage.setItem('couponCount', 1);
                    couponCount = parseInt(sessionStorage.getItem('couponCount'));
                    document.getElementById('coupon_update').innerHTML = couponCount;
                    document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
                    document.querySelector('.coupon-box').classList.add('coupon-box-styling');

                    // Check if countCourseArray session is set
                    if(!sessionStorage.getItem('courseArray')) {
                        // TO ENSURE countCOurseArray is empty
                        for(i = 0; i < countCourseArray.length; i++) {
                            countCourseArray.pop();
                        };
                        countCourseArray.push(courseObjectValues);
                        // Stringify countCourseArray
                        let stringCountCourseArray = JSON.stringify(countCourseArray);
                        // Set Session
                        sessionStorage.setItem('courseArray', stringCountCourseArray);
                        let getCountCourseArray = sessionStorage.getItem('courseArray');
                        let parseCourseArray = JSON.parse(getCountCourseArray);
                        txt = "";
                        choices = ""; 
                        total = 0;
                        for(i = 0; i < parseCourseArray.length; i++) {
                            // USE THE session(name) to run the loop
                            if(sessionStorage.getItem(parseCourseArray[i].name)) { //This if statement is no longer necesary because i have i have used the uncheck else function in the end of the code to reconstruct a new loop
                                choices += parseCourseArray[i].name + " ";  
                                txt += `
                                <div class=\"coupon-item\">       
                                    <p class=\"coupon-course-item\">${parseCourseArray[i].name}</p>
                                    <p class=\"coupon-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                                </div>
                                `;
                                total += parseInt(parseCourseArray[i].price);
                            };
                        };
                            txt +=  `
                            <div class=\"coupon-item\">
                                <h5 class=\"total-coupon-title\">TOTAL</h5>
                                <h6 class=\"total-coupon-price\">&#8358;${total}.00K</h6>
                            </div>
                            `;
                            sessionStorage.setItem('choices', choices); 
                            sessionStorage.setItem('total', total); 
                            document.getElementById('courses-shopping').innerHTML = txt;
                            document.getElementById('courses-chosen').value = sessionStorage.getItem('choices');
                            document.getElementById('total-price').value = sessionStorage.getItem('total');
                    } else {
                        // else means once session)'courseArray') is set, the function can be run from the level below
                        // Get session('courseArray)
                        let getCountCourseArray = sessionStorage.getItem('courseArray');
                        let parseCourseArray = JSON.parse(getCountCourseArray);
                        // Push new Object
                        parseCourseArray.push(courseObjectValues);
                        // StringifyArray
                        let stringCountCourseArray = JSON.stringify(parseCourseArray);
                        // Set session courseArray
                        sessionStorage.setItem('courseArray', stringCountCourseArray);
                        // Get the array
                        getCountCourseArray = sessionStorage.getItem('courseArray');
                        parseCourseArray = JSON.parse(getCountCourseArray);
                            // ----
                        txt = "";
                        choices = ""; 
                        total = 0;
                        for(i = 0; i < parseCourseArray.length; i++) {
                            // USE THE session(name) to run the loop
                            if(sessionStorage.getItem(parseCourseArray[i].name)) { //This if statement is no longer necesary because i have i have used the uncheck else function in the end of the code to reconstruct a new loop
                                choices += parseCourseArray[i].name + " ";  
                                txt += `
                                <div class=\"coupon-item\">       
                                    <p class=\"coupon-course-item\">${parseCourseArray[i].name}</p>
                                    <p class=\"coupon-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                                </div>
                                `;
                                total += parseInt(parseCourseArray[i].price);
                            };
                        };
                            txt +=  `
                            <div class=\"coupon-item\">
                                <h5 class=\"total-coupon-title\">TOTAL</h5>
                                <h6 class=\"total-coupon-price\">&#8358;${total}.00K</h6>
                            </div>
                            `;
                            sessionStorage.setItem('choices', choices); 
                            sessionStorage.setItem('total', total); 
                            document.getElementById('courses-shopping').innerHTML = txt;
                            document.getElementById('courses-chosen').value = sessionStorage.getItem('choices');
                            document.getElementById('total-price').value = sessionStorage.getItem('total');
                    };
                } else {
                    // else means that once sessionStorage.getItem('couponCount') is set, all other sessions are set
                    couponCount = parseInt(sessionStorage.getItem('couponCount'));
                    couponCount++;
                    sessionStorage.setItem('couponCount', couponCount);
                    document.getElementById('coupon_update').innerHTML = couponCount;
                    document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
                    document.querySelector('.coupon-box').classList.add('coupon-box-styling');
                    // Get session('courseArray)
                    let getCountCourseArray = sessionStorage.getItem('courseArray');
                    let parseCourseArray = JSON.parse(getCountCourseArray);
                    // Push new Object
                    parseCourseArray.push(courseObjectValues);
                    // StringifyArray
                    let stringCountCourseArray = JSON.stringify(parseCourseArray);
                    // Set session courseArray
                    sessionStorage.setItem('courseArray', stringCountCourseArray);
                    // Get the array
                    getCountCourseArray = sessionStorage.getItem('courseArray');
                    parseCourseArray = JSON.parse(getCountCourseArray);
                    // ----
                    txt = "";
                    choices = ""; 
                    total = 0;
                    for(i = 0; i < parseCourseArray.length; i++) {
                        // USE THE session(name) to run the loop
                        if(sessionStorage.getItem(parseCourseArray[i].name)) {
                            choices += parseCourseArray[i].name + " "; 
                            txt += `
                            <div class=\"coupon-item\">       
                                <p class=\"coupon-course-item\">${parseCourseArray[i].name}</p>
                                <p class=\"coupon-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                            </div>
                            `;
                            total += parseInt(parseCourseArray[i].price);
                        };
                    };
                    txt +=  `
                    <div class=\"coupon-item\">
                        <h5 class=\"total-coupon-title\">TOTAL</h5>
                        <h6 class=\"total-coupon-price\">&#8358;${total}.00K</h6>
                    </div>
                    `;
                    sessionStorage.setItem('choices', choices); 
                    sessionStorage.setItem('total', total);
                    document.getElementById('courses-shopping').innerHTML = txt;
                    document.getElementById('courses-chosen').value = sessionStorage.getItem('choices');
                    document.getElementById('total-price').value = sessionStorage.getItem('total');
                };
            } else {
                // else means that the input checkbox is unchecked 
                // Before you can uncheck, menas you have initial checked and a record is already set
                // REMOVE SEESION NAME
                sessionStorage.removeItem(inputCheckbox.name);
                couponCount = parseInt(sessionStorage.getItem('couponCount'));
                couponCount--;
                if(couponCount < 1) {
                    sessionStorage.clear();
                    document.getElementById('coupon_update').innerHTML = couponCount;
                    document.querySelector('.coupon-box').classList.add('minimize-coupon-box');
                    document.querySelector('.coupon-box').classList.remove('coupon-box-styling');
                } else {
                    sessionStorage.setItem('couponCount', couponCount);
                    document.getElementById('coupon_update').innerHTML = couponCount;
                    document.querySelector('.coupon-box').classList.remove('minimize-coupon-box');
                    document.querySelector('.coupon-box').classList.add('coupon-box-styling');
                    // Get session('courseArray)
                    let getCountCourseArray = sessionStorage.getItem('courseArray');
                    let parseCourseArray = JSON.parse(getCountCourseArray);
                    // Create a new array and list only array objects whose name properties exist in session name
                    let newArray = [];
                    // Loop through he old array
                    for(i = 0; i < parseCourseArray.length; i ++) {
                        if(sessionStorage.getItem(parseCourseArray[i].name)) {
                            newArray.push(parseCourseArray[i]);
                        }
                    }
                    // Stringify the new Array
                    let stringCountCourseArray = JSON.stringify(newArray);
                    // Set session courseArray
                    sessionStorage.setItem('courseArray', stringCountCourseArray);
                    // Get the array
                    getCountCourseArray = sessionStorage.getItem('courseArray');
                    parseCourseArray = JSON.parse(getCountCourseArray);
      
                    txt = "";
                    choices = "";
                    total = 0;
                    for(i = 0; i < parseCourseArray.length; i++) {
                        choices += parseCourseArray[i].name + " "; 
                        txt += `
                        <div class=\"coupon-item\">       
                            <p class=\"coupon-course-item\">${parseCourseArray[i].name}</p>
                            <p class=\"coupon-course-price\">&#8358;${parseCourseArray[i].price}.00K</p>
                        </div>
                        `;
                        total += parseInt(parseCourseArray[i].price);
                    };
                    txt +=  `
                    <div class=\"coupon-item\">
                        <h5 class=\"total-coupon-title\">TOTAL</h5>
                        <h6 class=\"total-coupon-price\">&#8358;${total}.00K</h6>
                    </div>
                    `;
                    sessionStorage.setItem('choices', choices); 
                    sessionStorage.setItem('total', total); 
                    document.getElementById('courses-shopping').innerHTML = txt;    
                    document.getElementById('courses-chosen').value = sessionStorage.getItem('choices');
                    document.getElementById('total-price').value = sessionStorage.getItem('total');    
                };
            };
        }, 100);
};
// END COUPON SCRIPT---------------------------------------------------------------------
function submitCourses(){
    document.querySelector('.enroll-now-form').classList.add('expand-form');
}
function enrollDataSubmit() {
    if(document.forms["enroll-form"]['fullname'].value == "") {
        document.querySelectorAll(".echo")[0].innerHTML = " *Enter fullname";
        document.querySelectorAll(".input-red")[0].style.borderColor = "red";
        return false;
    } else if(!document.forms["enroll-form"]['fullname'].value.match(/^[a-zA-Z ]*$/)) {
        document.querySelectorAll(".echo")[0].innerHTML = " *Invalid fullname";
        document.querySelectorAll(".input-red")[0].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[0].innerHTML = "";
        document.querySelectorAll(".input-red")[0].style.borderColor = "";
    };
    if(document.forms["enroll-form"]['email'].value == "") {
        document.querySelectorAll(".echo")[1].innerHTML = " *Enter email";
        document.querySelectorAll(".input-red")[1].style.borderColor = "red";
        return false;
    } else if(!document.forms["enroll-form"]['email'].value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(.[a-zA-Z-]+)*$/)) {
        document.querySelectorAll(".echo")[1].innerHTML = " *Invalid email";
        document.querySelectorAll(".input-red")[1].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[1].innerHTML = "";
        document.querySelectorAll(".input-red")[1].style.borderColor = "";
    };
    if(document.forms["enroll-form"]['password'].value == "") {
        document.querySelectorAll(".echo")[2].innerHTML = " *Enter password";
        document.querySelectorAll(".input-red")[2].style.borderColor = "red";
        return false;
    } else if(!document.forms["enroll-form"]['password'].value.match(/^[a-zA-Z0-9_]*$/)) {
        document.querySelectorAll(".echo")[2].innerHTML = " *Invalid password";
        document.querySelectorAll(".input-red")[2].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[2].innerHTML = "";
        document.querySelectorAll(".input-red")[2].style.borderColor = "";
        document.querySelector('.spinner-button').classList.remove('hide-display');
        document.querySelector('.submit-course-button').classList.add('hide-display');
        
        setTimeout(function() {
            var courseForm = document.forms["enroll-form"];
            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "path/backend/course.php", true);
            xhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    let theRestponse = this.responseText;
                    if(theRestponse == "Register success") {
                        sessionStorage.clear();
                        window.location.assign("./path/backend/dashboard.php");
                    } else {
                        document.querySelectorAll(".echo")[0].innerHTML = theRestponse;
                        document.querySelectorAll(".input-red")[0].style.borderColor = "red";
                        document.querySelector('.spinner-button').classList.add('hide-display');
                        document.querySelector('.submit-course-button').classList.remove('hide-display');
                    }
    
                };
            }
            var formData = new FormData(courseForm);
            xhttp.send(formData);
        }, 1000);
        
        return false;
    };
}
document.querySelectorAll(".show-pass").forEach(e => {
    e.addEventListener('click', () => {
        if(document.getElementById("password").getAttribute('type') === "password") {
            document.getElementById("password").setAttribute('type', 'text');
            document.querySelectorAll(".show-pass")[0].classList.add("hide-display");
            document.querySelectorAll(".show-pass")[1].classList.remove("hide-display");
        } else {
            document.getElementById("password").setAttribute('type', 'password');
            document.querySelectorAll(".show-pass")[0].classList.remove("hide-display");
            document.querySelectorAll(".show-pass")[1].classList.add("hide-display");
        }
    });
});

function cancelAll() {
    sessionStorage.clear();
    window.location.reload();
}
function level1() {
    var levels = document.querySelectorAll('.fluid-click-list');
    var courseTitleHeading = document.querySelectorAll('.course-title-heading');
    var courseTable = document.querySelectorAll('.course-table');
    levels[0].style.borderBottom = "4px solid var(--white)";
    levels[1].style.borderBottom = "none";
    levels[2].style.borderBottom = "none";
    courseTitleHeading[0].classList.remove('hide-display');
    courseTitleHeading[1].classList.add('hide-display');
    courseTitleHeading[2].classList.add('hide-display');
    courseTable[0].classList.remove('hide-display');
    courseTable[1].classList.add('hide-display');
    courseTable[2].classList.add('hide-display');
    // document.querySelectorAll('.brief-nest').forEach(function(e) {
    //     e.classList.remove('hide-display');
    // });
    // document.querySelectorAll('.feedback-nest').forEach(function(e) {
    //     e.classList.add('hide-display');
    // });
    // document.querySelectorAll('.review-nest').forEach(function(e) {
    //     e.classList.add('hide-display');
    // });
};
function level2() {
    var levels = document.querySelectorAll('.fluid-click-list');
    var courseTitleHeading = document.querySelectorAll('.course-title-heading');
    var courseTable = document.querySelectorAll('.course-table');
    levels[0].style.borderBottom = "none";
    levels[1].style.borderBottom = "4px solid var(--white)";
    levels[2].style.borderBottom = "none";
    courseTitleHeading[0].classList.add('hide-display');
    courseTitleHeading[1].classList.remove('hide-display');
    courseTitleHeading[2].classList.add('hide-display');
    courseTable[0].classList.add('hide-display');
    courseTable[1].classList.remove('hide-display');
    courseTable[2].classList.add('hide-display');
};
function level3() {
    var levels = document.querySelectorAll('.fluid-click-list');
    var courseTitleHeading = document.querySelectorAll('.course-title-heading');
    var courseTable = document.querySelectorAll('.course-table');
    levels[0].style.borderBottom = "none";
    levels[1].style.borderBottom = "none";
    levels[2].style.borderBottom = "4px solid var(--white)";
    courseTitleHeading[0].classList.add('hide-display');
    courseTitleHeading[1].classList.add('hide-display');
    courseTitleHeading[2].classList.remove('hide-display');
    courseTable[0].classList.add('hide-display');
    courseTable[1].classList.add('hide-display');
    courseTable[2].classList.remove('hide-display');
};
