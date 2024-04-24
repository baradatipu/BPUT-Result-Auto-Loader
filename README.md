## BPUT Results Auto-loader

### Overview
This script automates the process of navigating through BPUT (Biju Patnaik University of Technology) result pages, specifically designed for Gandhi Academy of Technology Engineering, Berhampur. It allows you to effortlessly cycle through student results using the right and left arrow keys on your keyboard.

### Requirements
1. **Chrome Extension:** [User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)
   - Install this extension to inject custom JavaScript and CSS into web pages.

### Installation Steps
1. **Install Chrome Extension:**
   - Install the "User JavaScript and CSS" extension from the provided [link](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld).

2. **Copy and Paste Code:**
   - Copy the provided JavaScript code below.
  
  ---      
 <details>
  <summary>JavaScript Code</summary>

```javascript
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

```
</details>

---


3. **Configure Extension:**
   - Open the "User JavaScript and CSS" extension.
   - Paste the copied JavaScript code into the appropriate section.

4. **Add BPUT Results URL:**
   - Add the URL of the BPUT results website (e.g., https://results.bput.ac.in/).
   
### Usage
- Once the script is installed and configured, navigate to the BPUT results website.
- Ensure that you are on the correct page displaying results for Gandhi Academy of Technology Engineering, Berhampur.
- Use the right arrow key to load the results for the next student.
- Use the left arrow key to load the results for the previous student.

### Notes
- This script is designed specifically for Gandhi Academy of Technology Engineering, Berhampur.
- It works for the 1st semester MCA results of the academic year 2023-24, 3rd phase, as of April 24, 2024.
- Modifications may be required if there are changes in the structure or functionality of the results website.
- Ensure compatibility by verifying button functions and element IDs using browser developer tools.

### Disclaimer
- The functionality of this script is subject to changes in the target website's structure or policies.
- Use at your own risk. There is no guarantee of perpetual compatibility with the results website.

