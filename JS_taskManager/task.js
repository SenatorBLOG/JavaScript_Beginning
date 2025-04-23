"use strict";

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("taskPriority");
    const timeInput = document.getElementById("timeInput");
    const tableBody = document.getElementById("taskTableBody");

    const task = taskInput.value.trim();
    const priority = prioritySelect.value;
    const time = timeInput.value;

    if (task === "") {
        alert("Task cannot be empty.");
        return;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const timeCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    nameCell.textContent = task;
    priorityCell.textContent = priority;
    timeCell.textContent = time + "h";

    if (priority === "high") {
        priorityCell.style.color = "red";
    } else if (priority === "medium") {
        priorityCell.style.color = "orange";
    } else {
        priorityCell.style.color = "green";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => row.remove();
    deleteCell.appendChild(deleteBtn);

    row.appendChild(nameCell);
    row.appendChild(priorityCell);
    row.appendChild(timeCell);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);

    taskInput.value = "";
    timeInput.value = "";
    prioritySelect.value = "low";
}
