const input = document.getElementById("textTask")
const button = document.getElementById("addTask")
const board = document.getElementById("board")
const deleteButton = document.getElementsByClassName("removeTask")
const checkButton = document.getElementsByClassName("check")

function startApp() {

  board.innerHTML = window.localStorage.getItem(`boardStorage`)

  for (let el of checkButton) {

    el.addEventListener('click', checkBoxTask);
  }

  for (let el of deleteButton) {

    el.addEventListener("click", deleteTask)
  }
}

function checkBoxTask() {
  const parent = this.parentNode.parentNode

  if (this.getAttribute(`src`) == `./assets/Frame.svg`) {

    this.setAttribute('src', './assets/check.svg');
    parent.classList.add("tasks-finished")

  } else if (this.getAttribute(`src`) != `./assets/Frame.svg`) {

    this.setAttribute('src', './assets/Frame.svg');
    parent.classList.remove("tasks-finished")

  }

  saveLocalStorage()
}

function deleteTask() {
  const deleteParent = this.parentNode
  deleteParent.remove()
  saveLocalStorage()
}

button.addEventListener("click", function () {
  const newTask = document.createElement("li")
  newTask.classList = `tasks`
  newTask.innerHTML = `<p class="task"><img class="check pointer" src="./assets/Frame.svg" alt="">${input.value} </p>
<img class="removeTask pointer" src="./assets/remove.svg" alt="">`

  board.appendChild(newTask)

  input.value = ``

  saveLocalStorage()

  startApp();
});

function saveLocalStorage() {
  window.localStorage.setItem(`boardStorage`, board.innerHTML)
}

startApp()





