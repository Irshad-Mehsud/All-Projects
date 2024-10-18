let button = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");

let isEditing = false;
let currentLi = null;

button.addEventListener("click", function() {
    const inputValue = input.value; // Get the value of the input

    if (inputValue) {
        if (isEditing) { // If in edit mode, update the current list item
            currentLi.firstChild.textContent = inputValue; // Update the text of the existing li
            isEditing = false; // Reset the editing mode
            currentLi = null; // Clear the reference to the current li
            button.innerText = "Add Todo"; // Reset the button text to "Add"
        } else { // If not editing, add a new item
            const li = document.createElement("li"); // Create a new li element
            const deleteBtn = document.createElement("button"); // Create a delete button
            const editBtn = document.createElement("button"); // Create an edit button

            editBtn.innerHTML = "Edit";
            editBtn.classList.add("edit-btn"); // Add a class for styling (optional)
            deleteBtn.innerHTML = "X"; // Set the text for the delete button
            deleteBtn.classList.add("delete-btn"); // Add a class for styling (optional)

            // Add event listener to delete the li
            deleteBtn.addEventListener("click", function() {
                ul.removeChild(li); // Remove the li when the button is clicked
            });

            // Add event listener to edit the li
            editBtn.addEventListener("click", function() {
                input.value = li.firstChild.textContent; // Set input value to current text
                isEditing = true; // Set editing mode
                currentLi = li; // Keep track of the current li being edited
                button.innerText = "Save"; // Change button text to "Save"
            });

            li.appendChild(document.createTextNode(inputValue)); // Set the text of the li to the input value
            li.appendChild(editBtn); // Append the edit button to the li
            li.appendChild(deleteBtn); // Append the delete button to the li
            ul.appendChild(li); // Append the li to the ul
        }

        input.value = ""; // Clear the input
    } else {
        console.log("Input cannot be empty"); // Log a message if input is empty
    }
});
