const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const tasks = JSON.parse(localStorage.getItem("tasks")) || []

// Adicionar a Task
function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText === "") return

    const task = { text: taskText }
    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    taskInput.value = ""

    displayTasks()
}

// Deletar Task
function deleteTask(index) {
    tasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    displayTasks()
}

// Editar Task
function editTask(index) {
    const newTaskText = prompt("Editar tarefa: ", tasks[index].text)

    if (newTaskText !== null) {
        tasks[index].text = newTaskText

        localStorage.setItem("tasks", JSON.stringify(tasks))

        displayTasks()
    }
}

// Crear as Tasks
function displayTasks() {
    taskList.innerHTML = ""

    tasks.forEach((task, index) => {
        const li = document.createElement("li")

        li.innerHTML = `
            <span>${task.text}</span>
            <hr>
            <button class="btn btn-warning mr-3" onclick="editTask(${index})">Editar</button>
            <button class="btn btn-danger" onclick="deleteTask(${index})">Deletar</button>
        `

        taskList.appendChild(li)
    });
}

displayTasks()