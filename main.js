const button = document.getElementById("checkedButton")
const checkbox = document.getElementById("checkerChechbox")
const inputDiv = document.getElementById("Input")
const database = document.getElementById("databaseError")
const followup = document.getElementById("followUp")
const jokes = document.getElementById("indexJokes")
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
const text = "Sorry no database yet"; // The text to be animated
  const typingEffect = document.getElementById("databaseError");
  let charIndex = 0;
  function type() {
    if (charIndex < text.length) {
      typingEffect.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    }
  }
button.addEventListener('click', function(){
  inputDiv.style.display = "none" ;
  jokes.style.display = "block"
  type();
  //database.innerHTML = "404 Database not found";
  console.log('Joke incoming');
  setTimeout(() => {
    followup.innerHTML = "Just kidding I have no database yet"
  }, 3000);

})
