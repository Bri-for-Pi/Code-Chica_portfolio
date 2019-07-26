document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "Brianna Caitlin Lamb";
}

function mySchool() {
    document.getElementById("school").innerHTML = "Cedar Ridge High School";
}

function myCareer() {
    document.getElementById("career").innerHTML = "Electrical Engineer and Professional Soccer player for Texas A&M";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "Viola and Violin, Singing, Drawing, Painting, Acting, Soccer, Tennis,coding, and video games";
}
document.getElementById("myInsta").addEventListener("click", myInsta)