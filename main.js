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
// Function to handle user registration
function registerUser() {
  // Get user input from the form
  const username = document.querySelector('.indexLoginInput[placeholder="Username"]').value;
  const email = document.querySelector('.indexLoginInput[placeholder="Email"]').value;
  const password = document.querySelector('.indexLoginInput[placeholder="Password"]').value;

  // Create a new user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;

      // Store additional user information in the Realtime Database
      const db = firebase.database();
      const usersRef = db.ref('users');
      const userInformation = {
        email: email,
        username: username,
        // Additional user data
      };

      // Use the user's unique ID as the key for the user data
      const userId = user.uid;

      // Set the user information in the database
      usersRef.child(userId).set(userInformation);

      // Redirect or perform other actions after successful registration
    })
    .catch((error) => {
      // Handle registration errors
      const errorCode = error.code;
      const errorMessage = error.message;
      // Display error to the user
    });
}

// Add an event listener to the registration button
const registerButton = document.getElementById('checkedButton');
registerButton.addEventListener('click', registerUser);

