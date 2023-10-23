const button = document.getElementById("checkedButton")
const checkbox = document.getElementById("checkerChechbox")
const inputDiv = document.getElementById("Input")
const database = document.getElementById("databaseError")
const followup = document.getElementById("followUp")
const jokes = document.getElementById("indexJokes")
const adSection = document.getElementById("indexAdSection")
const main = document.getElementById("indexMainSection")

function handleButtonMouseOver() {
  button.style.backgroundColor = "#333";
  button.style.color = "#ccc";
  button.style.borderColor = "darkblue";
}
function handleButtonMouseOut() {
  button.style.background = "darkgrey";
  button.style.color = "#ccc";
  button.style.borderColor = "";
}
function basicButtonSetting(){
  button.style.background = "darkgrey";
  button.style.color = "#ccc";
}
checkbox.addEventListener('change', function() {
  button.disabled = !checkbox.checked;
  if (checkbox.checked) {
    button.addEventListener("mouseover", handleButtonMouseOver);
    button.addEventListener("mouseout", handleButtonMouseOut);
    basicButtonSetting();
  } else {
    button.style.backgroundColor = "";
    button.removeEventListener("mouseover", handleButtonMouseOver);
    button.removeEventListener("mouseout", handleButtonMouseOut);
  }
});
const text = "Database error"; // The text to be animated
let charIndex = 0;
function type() {
  if (charIndex < text.length) {
    database.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
  }
  else{
    setTimeout(() => {
  followup.innerHTML = "Just kidding I have no database yet"
  }, 3000);
  }
}
button.addEventListener('click', function(){
  inputDiv.style.display = "none" ;
  jokes.style.display = "block"
  type();
  console.log('Joke incoming');
})
fetch('http://192.168.10.102:5000/api/get_data')
  .then(response => response.json())
  .then(data => {
    // Handle and display the data on your website
  })
  .catch(error => console.error(error));
