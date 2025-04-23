"use strict";

let i = 0;

function addTask() {
    const taskName = document.getElementById("taskName");
    const taskHours = document.getElementById("taskHours");
    const payHours = document.getElementById("payHours");
    const totalDays = document.getElementById("totalDays");
    const bonusRate = document.getElementById("bonusRate");
    const taskList = document.getElementById("taskList");

    const name = taskName.value.trim();
    const hours = parseFloat(taskHours.value);
    const cost = parseFloat(payHours.value);
    const bonus = parseFloat(bonusRate.value);
    const days = parseInt(totalDays.value);

    if (name === "") {
        alert("Task name cannot be empty.");
        return;
    }
    if (isNaN(hours) || hours < 1 || hours > 24) {
        alert("Hours must be between 1 to 24.");
        return;
    }
    if (isNaN(cost) || cost < 17.40) {
        alert("17.40 is the minimum rate.");
        return;
    }
    if (isNaN(days) || days < 1) {
        alert("Days must be at least 1.");
        return;
    }

    
    if (!document.getElementById("taskListHeader")) {
        const header = document.createElement("li");
        header.className = "list-header";
        header.id = "taskListHeader";
        header.innerHTML = `
            <strong>Task</strong>
            <strong>Hours</strong>
            <strong>Rate</strong>
            <strong>Bonus</strong>
            <strong>Days</strong>
        `;
        taskList.appendChild(header);
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label id="name${i}">${name}</label>
        <label id="hours${i}">${hours}</label>
        <label id="cost${i}">${cost}</label>
        <label id="bonus${i}">${bonus}</label>
        <label id="days${i}">${days}</label>
    `;
    taskList.appendChild(li);

    i++;

    // Сброс
    taskName.value = "";
    taskHours.value = "";
    payHours.value = "";
    totalDays.value = "";
}

function calcSal() {
    const incomeList = document.getElementById("incomeList");

    // Удаляем старые результаты, но не заголовок
    incomeList.querySelectorAll("li:not(#incomeListHeader)").forEach(li => li.remove());

    if (!document.getElementById("incomeListHeader")) {
        const header = document.createElement("li");
        header.className = "list-header";
        header.id = "incomeListHeader";
        header.innerHTML = `
            <strong>Task</strong>
            <strong>Estimated Income</strong>
        `;
        incomeList.appendChild(header);
    }

    for (let a = 0; a < i; a++) {
        const nameEl = document.getElementById("name" + a);
        const hoursEl = document.getElementById("hours" + a);
        const costEl = document.getElementById("cost" + a);
        const bonusEl = document.getElementById("bonus" + a);
        const daysEl = document.getElementById("days" + a);

        // Пропустить, если элемент не существует (например, был удалён вручную)
        if (!nameEl || !hoursEl || !costEl || !bonusEl || !daysEl) continue;

        const name = nameEl.textContent;
        const hours = parseFloat(hoursEl.textContent);
        const cost = parseFloat(costEl.textContent);
        const bonus = parseFloat(bonusEl.textContent);
        const days = parseInt(daysEl.textContent);

        const income = hours * cost * (1 + bonus) * days;

        const li = document.createElement("li");
        li.innerHTML = `<label>${name}</label> <label>${income.toFixed(2)} USD</label>`;
        incomeList.appendChild(li);
    }
}
