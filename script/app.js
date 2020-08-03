const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.addEventListener("click", function (e) {
  one.classList.add("invisible");
});

two.addEventListener("click", function (e) {
  two.classList.add("invisible");
});

three.addEventListener("click", function (e) {
  three.classList.add("invisible");
});
