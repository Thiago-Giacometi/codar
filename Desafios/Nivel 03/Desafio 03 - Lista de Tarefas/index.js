const input = document.getElementById("textTask")
const button = document.getElementById("addTask")
const board = document.getElementById("board")
const deleteButton = document.getElementsByClassName("removeTask")
const checkButton = document.getElementsByClassName("check")

function startApp() {

  for (let el of checkButton) {
    el.addEventListener('click', function () {

      const parent = this.parentNode.parentNode

      if (this.getAttribute(`src`) == `./assets/Frame.svg`) {

        this.setAttribute('src', './assets/check.svg');
        parent.classList.add("tasks-finished")

      } else {
        const parent = this.parentNode.parentNode

        this.setAttribute('src', './assets/Frame.svg');
        parent.classList.remove("tasks-finished")
      }

    });
  }

  for (let el of deleteButton) {
    el.addEventListener("click", function () {

      const deleteParent = this.parentNode
      board.removeChild(deleteParent)

    })
  }
}

button.addEventListener("click", () => {

  const newTask = document.createElement("li")
  newTask.classList = `tasks`
  newTask.innerHTML = `<p class="task"><img class="check pointer" src="./assets/Frame.svg" alt="">${input.value} <img
  src="./assets/calendar-emoji.png" alt=""></p>
<img class="removeTask pointer" src="./assets/remove.svg" alt="">`

  board.appendChild(newTask)

  input.value = ``

  startApp();
});

startApp();




