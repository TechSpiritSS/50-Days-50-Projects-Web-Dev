const password = document.getElementById("password");
const background = document.getElementById("background");
const check = document.querySelector(".check");

//Listening for each key
password.addEventListener("input", (e) => {
  const input = e.target.value;
  CheckPasswordStrength(input);
});

function CheckPasswordStrength(password) {
  var password_strength = document.getElementById("password_strength");

  //TextBox left blank.
  if (password.length == 0) {
    password_strength.innerHTML = "";
    check.classList.remove("visible");
    return;
  } else {
    check.classList.add("visible");
  }

  //Expressions. (C++ vector like)
  var exp = new Array();
  exp.push("[A-Z]"); //Uppercase Alphabet.
  exp.push("[a-z]"); //Lowercase Alphabet.
  exp.push("[0-9]"); //Digit.
  exp.push("[$@$!%*#?&]"); //Special Character.

  var power = 0;

  //Validate for each Expression.
  for (var i = 0; i < exp.length; i++) {
    if (new RegExp(exp[i]).test(password)) {
      power++;
    }
  }

  //Validate for length of Password.
  if (power > 2 && password.length > 8) {
    power++;
  }

  //Display status.
  var color = "";
  var strength = "";
  switch (power) {
    case 0:
    case 1:
      strength = "Weak";
      color = "red";
      break;
    case 2:
      strength = "Good";
      color = "darkorange";
      break;
    case 3:
    case 4:
      strength = "Strong";
      color = "green";
      break;
    case 5:
      strength = "Very Strong";
      color = "darkgreen";
      break;
  }

  const blur = 20 - power * 4;
  background.style.filter = `blur(${blur}px)`;
  password_strength.innerHTML = strength;
  password_strength.style.color = color;
}
