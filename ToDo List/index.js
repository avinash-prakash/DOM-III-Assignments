document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.querySelector('form');
    const taskInput = document.getElementById('task');
    const prioritySelect = document.getElementById('priority');
    const tableBody = document.querySelector('tbody');

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskName = taskInput.value;
        const selectedPriority = prioritySelect.value;
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.innerText = taskName;
        td2.innerText = selectedPriority;
        td3.innerText = "Favourite";

        row.append(td1, td2, td3);
        tableBody.appendChild(row);

        // Add a class to set the background color based on priority
        if (selectedPriority === "High") {
            row.classList.add('high-priority');
        } else {
            row.classList.add('low-priority');
        }

        // Clear the form fields
        taskInput.value = "";
        prioritySelect.value = "";
    });
});
