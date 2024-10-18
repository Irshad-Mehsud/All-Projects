let input = document.getElementById('input'); // Get the input field
let buttons = document.querySelectorAll('button'); // Select all buttons (since all buttons have the same id, we're using querySelectorAll on button tags)
let currentInput = ''; // To hold the current input for calculation
let operators = ['+', '-', '*', '/']; // List of valid operators

buttons.forEach(function(buttons) {
    buttons.addEventListener('click', function() {
        let buttonText = buttons.innerHTML;

        // Handle special buttons (AC, =)
        if (buttonText === 'AC') {
            currentInput = ''; // Clear all input
            input.value = ''; // Clear the input display
        } else if (buttonText === '=') {
            // Prevent calculation if the current input ends with an operator
            if (operators.includes(currentInput[currentInput.length - 1])) {
                input.value = 'Error'; // Display error if expression ends with operator
                currentInput = ''; // Reset the input after showing error
            } else {
                // Evaluate the expression
                try {
                    currentInput = eval(currentInput); // Calculate the result using eval
                    input.value = currentInput; // Display the result
                } catch (error) {
                    input.value = 'Error'; // Handle errors
                    currentInput = ''; // Reset input on error
                }
            }
        } else {
            // Handle regular number and operator input
            if (operators.includes(buttonText) && operators.includes(currentInput[currentInput.length - 1])) {
                // Prevent consecutive operators (e.g., ++, --, etc.)
                return;
            } else {
                currentInput += buttonText; // Append the button value to the input
                input.value = currentInput; // Update the input display
            }
        }
    });
});
