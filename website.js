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

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/


