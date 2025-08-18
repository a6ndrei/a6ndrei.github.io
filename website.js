// Get the modal
var modal = document.getElementById("modalulmeu");

// Get the button that opens the modal
var btn = document.getElementById("butonulmeu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

var modalProgramat = document.getElementById("modalProgramat");

// Get the button that opens the modal
var button = document.getElementById("programat");

// Get the <span> element that closes the modal
var spanProgramat = document.getElementsByClassName("inchide")[0];
// When the user clicks on the button, open the modal
button.onclick = function() {
  ValidateEmail();
  modal.style.display= "none";
  modalProgramat.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
  spanProgramat.onclick = function() {
  modalProgramat.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  const modalProgramat = document.getElementById("modalProgramat");
  if(event.target == modalProgramat) {
    modalProgramat.style.display = "none";
  }
  if (event.target == modalContact) {
    modalContact.style.display = "none";
  }
  if (event.target == modalContactVar) {
    modalContactVar.style.display = "none";
  }
}
// Get the modal
var modalContact = document.getElementById("modalContact1");

// Get the button that opens the modal
var btnContact = document.getElementById("butonContact");

// Get the <span> element that closes the modal
var spanContact = document.getElementsByClassName("closeContact")[0];

// When the user clicks on the button, open the modal
btnContact.onclick = function() {
  modalContact.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanContact.onclick = function() {
  modalContact.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modalContact) {
    modalContact.style.display = "none";
  }
}*/
// Get the modal
var modalContactVar = document.getElementById("modalContact2");

// Get the button that opens the modal
var btnContact2 = document.getElementById("trimite");

// Get the <span> element that closes the modal
var spanContact2 = document.getElementsByClassName("closeContact2")[0];

// When the user clicks on the button, open the modal
btnContact2.onclick = function() {
  modalContact.style.display= "none";
  modalContactVar.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanContact2.onclick = function() {
  modalContactVar.style.display = "none";
}


const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});

document.getElementById("myDate").onchange = function(){
   const date = new Date(this.value);
   const year =  date.getFullYear();
   console.log(year);
   
}

// const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// const validate = () => {
//   const $result = $('#result');
//   const email = $('#email').val();
//   $result.text('');

//   if(validateEmail(email)){
//     $result.text(email + ' is valid.');
//     $result.css('color', 'green');
//   } else{
//     $result.text(email + ' is invalid.');
//     $result.css('color', 'red');
//   }
//   return false;
// }

// $('#email').on('input', validate);
function ValidateEmail()
{
  console.log("aici");
  
const input=document.getElementById("mailProgramare");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(input.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
input.focus();
return false;
}
}
