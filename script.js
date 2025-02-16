//To-Do List JavaScript
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  inputBox.value = "";
  SaveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);

function SaveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}
function LoadData() {
  listContainer.innerHTML = localStorage.getItem("Data");
}
LoadData();
