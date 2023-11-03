document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const docID = document.getElementById("docID").value;
      const specialization = document.getElementById("dept").value;
      const experience = parseInt(document.getElementById("exp").value); // Parse as an integer
      const email = document.getElementById("email").value;
      const mobileNumber = document.getElementById("mbl").value;
      const role = getDoctorRole(experience); // Calculate the role
  
      // Create a new row in the table
      const row = document.createElement("tr");
  
      // Create table data (td) elements for each column
      const nameCell = createTableCell(name);
      const docIDCell = createTableCell(docID);
      const specializationCell = createTableCell(specialization);
      const experienceCell = createTableCell(experience);
      const emailCell = createTableCell(email);
      const mobileNumberCell = createTableCell(mobileNumber);
      const roleCell = createTableCell(role);
      const deleteCell = createDeleteButton();
  
      row.appendChild(nameCell);
      row.appendChild(docIDCell);
      row.appendChild(specializationCell);
      row.appendChild(experienceCell);
      row.appendChild(emailCell);
      row.appendChild(mobileNumberCell);
      row.appendChild(roleCell);
      row.appendChild(deleteCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
  
      // Clear form input fields
      form.reset();
    });
  
    // Function to calculate the doctor's role based on experience
    function getDoctorRole(experience) {
      if (experience > 5) {
        return "Senior";
      } else if (experience >= 2) {
        return "Junior";
      } else {
        return "Trainee";
      }
    }
  
    // Function to create a table cell with content
    function createTableCell(content) {
      const cell = document.createElement("td");
      cell.textContent = content;
      return cell;
    }
  
    // Function to create a delete button for a row
    function createDeleteButton() {
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        const row = deleteButton.closest("tr");
        row.remove();
      });
      deleteCell.appendChild(deleteButton);
      return deleteCell;
    }
  });
  