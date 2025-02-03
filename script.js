function addTask() {
    let taskInput = document.getElementById("taskInput");
    let category = document.getElementById("category").value;
    let priority = document.getElementById("priority").value;
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.className = "task-item";
    
    let taskText = document.createElement("span");
    taskText.classList.add("task-text");
    
    // Assign color class based on priority
    if (priority === "High") {
        taskText.classList.add("high");
    } else if (priority === "Medium") {
        taskText.classList.add("medium");
    } else {
        taskText.classList.add("low");
    }

    taskText.innerHTML = `${taskInput.value} - ${category} - ${priority}`;

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";

    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "complete-btn";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        li.remove();
    };

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    
    li.appendChild(taskText);
    li.appendChild(buttonContainer);
    
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding task
}
