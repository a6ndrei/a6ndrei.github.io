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
var spanProgramat = document.getElementById("spanProgramat");

// When the user clicks on the button, open the modal
button.onclick = function() {
 const v= ValidateEmail();
 const p=validateForm();
 const d=validareData();
 const o=validareOra();
  if(v&&p&&d&&o){
    modal.style.display= "none";
    modalProgramat.style.display = "block";
  }
  else{
    modalProgramat.style.display = "none";
  }
  document.getElementById("ora").value='';
  document.getElementById("myDate").value='';
  document.getElementById("mailProgramare").value='';
  document.getElementById("telefon").value='';
}

// When the user clicks on <span> (x), close the modal
  spanProgramat.onclick = function() {
  modal.style.display = "none";
  document.getElementById("ora").value='';
  document.getElementById("myDate").value='';
  document.getElementById("mailProgramare").value='';
  document.getElementById("telefon").value='';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("ora").value='';
  document.getElementById("myDate").value='';
  document.getElementById("mailProgramare").value='';
  document.getElementById("telefon").value='';
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
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
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
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
  // modalContact.style.display= "none";
  // modalContactVar.style.display = "block";
  const p=ValidateEmailContact();
  const m=validareMesaj();
  if(p&&m){
    modalContact.style.display= "none";
    modalContactVar.style.display = "block";
  }
  else{
    modalContactVar.style.display = "none";
  }
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
}

// When the user clicks on <span> (x), close the modal
spanContact2.onclick = function() {
  modalContactVar.style.display = "none";
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
}



function validareData(){
  const date=new Date(document.getElementById("myDate").value);
  //  const date = new Date(this.value);
   const year =  date.getFullYear();
   if(year==2025){
    return true;}
  else{
    alert("Invalid date!");
    return false;
  }
   
}

//  document.getElementById("myDate").onchange = validareData();

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
 function validateForm() {
        return checkPhone();
    }
    function checkPhone() {
        var phone = document.getElementById("telefon");
        var phoneNum = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/;
            if(phone.value.match(phoneNum)) {
                return true;
            }
            else {
              alert("Incorrect phone number!")
                return false;
            }
        }
function validareOra(){
  var hour=document.getElementById("ora").value;
  if(hour==""){
    alert("No hour specified!")
    return false;
  }
  else {
     return true;
  }
 
}
function ValidateEmailContact()
{
  
const input=document.getElementById("mailContact");
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
function validareMesaj(){
  var mesaj=document.getElementById("mesajTrimis").value;
  if(mesaj==""){
    alert("No message specified!")
    return false;
  }
  else {
     return true;
  }
 
}

