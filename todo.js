const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = `toDo`;

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChile(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const toDo = localStorage.getItem(TODO_LS);
  if (toDo !== null) {
  }
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}
