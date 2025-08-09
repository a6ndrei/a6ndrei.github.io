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
}
