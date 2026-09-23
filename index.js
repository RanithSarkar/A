//menu open and close
function clicked() {
               document.getElementsByClassName("manu")[0].style.right="0vw";
           }
function clicked1() {
               document.getElementsByClassName("manu")[0].style.right="-72vw";
           }
//display age
const dob = new Date(2005, 9, 6); // October 6, 2005
const today = new Date();
let age = today.getFullYear() - dob.getFullYear();
if (
  today.getMonth() < dob.getMonth() ||
  (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
) {
  age--;
}
document.getElementsByClassName("age2")[0].innerHTML = age + " years";
//display copyright
document.getElementsByClassName("ft")[0].innerHTML="|| Created by Ranith Sarkar ||<br><br>Copyright © "+new Date().getFullYear();
