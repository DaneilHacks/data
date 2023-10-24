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
// Initialize the Firebase Realtime Database
const db = firebase.database();

// Example: Read data from the Firebase Realtime Database
const dataRef = db.ref("your_data_path");
dataRef.on("value", (snapshot) => {
  const data = snapshot.val();
  // Handle the retrieved data here
});
// Example: Write data to the Firebase Realtime Database
const newData = {
  key1: "value1",
  key2: "value2",
};
dataRef.set(newData, (error) => {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
  }
});
