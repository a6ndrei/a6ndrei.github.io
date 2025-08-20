
var modal = document.getElementById("modalulmeu");
var btn = document.getElementById("butonulmeu");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
var modalProgramat = document.getElementById("modalProgramat");
var button = document.getElementById("programat");
var spanProgramat = document.getElementById("spanProgramat");
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
  spanProgramat.onclick = function() {
  modal.style.display = "none";
  document.getElementById("ora").value='';
  document.getElementById("myDate").value='';
  document.getElementById("mailProgramare").value='';
  document.getElementById("telefon").value='';
}
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
var modalContact = document.getElementById("modalContact1");
var btnContact = document.getElementById("butonContact");
var spanContact = document.getElementsByClassName("closeContact")[0];
btnContact.onclick = function() {
  modalContact.style.display = "block";
}
spanContact.onclick = function() {
  modalContact.style.display = "none";
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
}
var modalContactVar = document.getElementById("modalContact2");
var btnContact2 = document.getElementById("trimite");
var spanContact2 = document.getElementsByClassName("closeContact2")[0];
btnContact2.onclick = function() {
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
spanContact2.onclick = function() {
  modalContactVar.style.display = "none";
  document.getElementById("mailContact").value='';
  document.getElementById("mesajTrimis").value='';
}



function validareData(){
  const date=new Date(document.getElementById("myDate").value);
   const year =  date.getFullYear();
   if(year==2025){
    return true;}
  else{
    alert("Invalid date!");
    return false;
  }
   
}
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

