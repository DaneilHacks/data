var button = document.getElementById("checkedButton")
var checkbox = document.getElementById("checkerChechbox")
var inputDiv = document.getElementById("Input")
var database = document.getElementById("databaseError")
var followup = document.getElementById("followUp")
checkbox.addEventListener('change', function() {
    button.disabled = !checkbox.checked;
  });
button.addEventListener('click', function(){
  inputDiv.style.display = "none"  
    database.style.display = "block"
  console.log('Joke incoming');
  setTimeout(() => {
    followup.style.display = "block"
  }, 3000);
})
