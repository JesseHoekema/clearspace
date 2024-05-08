// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal inside the sidebar
var btn = document.getElementById("openModalBtn");

// Get the button that opens the modal outside the sidebar
var btn2 = document.getElementById("openModalBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button inside the sidebar, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks the button outside the sidebar, open the modal 
btn2.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
