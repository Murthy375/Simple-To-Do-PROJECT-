let ip = document.querySelector("input")
let btn = document.querySelector("button")
let container = document.querySelector(".container")

btn.addEventListener("click", () => {
    task = ip.value;
    console.log(task);

    taskMaker(task)

    ip.value = ""
    ip.placeholder = "write any task..."
});


function taskMaker(task) {
    let newTask = document.createElement("li")
    newTask.innerHTML = task;
    container.appendChild(newTask);
};