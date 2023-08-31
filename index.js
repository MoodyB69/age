const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
let resulEl = document.getElementById("result");

function calculateAge() {
  const birthdayVal = birthdayEl.value;
  if (birthdayVal === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayVal);
    resulEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(birthdayVal) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayVal);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
