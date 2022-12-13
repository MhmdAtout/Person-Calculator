const addbtn = document.getElementById("addBtn");
const resetbtn = document.getElementById("resetBtn");
let counter = document.getElementById("counter");
let savebtn = document.getElementById("saveBtn");
let enteries = document.getElementById("numbers");

addbtn.addEventListener("click", () => {
  counter.innerText = ++counter.innerText;
});

savebtn.addEventListener("click", () => {
  enteries.innerHTML += counter.innerText + ", ";
  counter.innerText = 0;
});

resetbtn.addEventListener("click", () => {
  counter.innerText = 0;
  enteries.innerText = "";
});
