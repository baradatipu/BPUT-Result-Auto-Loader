// Function to load student results
function loadStudentResults(studentId) {
    // Call the function with the provided studentId
    getStudentSemResults(studentId, 1);
}
// GANDHI ACADEMY OF TECHNOLOGY ENGINEERING, BERHAMPUR
// Initial student ID
let currentStudentId = 2305324000;

// Function to handle key presses
function handleKeyPress(event) {
    // Right arrow key
    if (event.keyCode === 39) {
        // Increment student ID
        currentStudentId++;
        // Load results for the next student
        loadStudentResults(currentStudentId);
    }
    // Left arrow key
    else if (event.keyCode === 37) {
        // Decrement student ID
        currentStudentId--;
        // Load results for the previous student
        loadStudentResults(currentStudentId);
    }
}

// Add event listener for key presses
document.addEventListener('keydown', handleKeyPress);
