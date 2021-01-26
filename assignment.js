const task3Element = document.getElementById("task-3");

function message() {
  alert("Hello, you are amazing!");
}

function message2(name) {
  alert("Hello, you are amazing " + name + "!");
}

message();
message2("Nicole");

task3Element.addEventListener("click", message);

function message3(string1, string2, string3) {
  alert(string1 + string2 + string3);
}

message3("Hola! ", "Mucho gusto! ", "Como estas? ");

// Instructor solution
function combine(str1, str2, str3) {
  const combineText = `${str1} ${str2}${str3}`;
  return combineText;
}
const combineString = combine("Hi", "there", "!");
alert(combineString);
