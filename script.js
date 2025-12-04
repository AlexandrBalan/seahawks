// Turn dark mode on and off
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Show or hide the game day tips box
function toggleTips() {
    var box = document.getElementById("gameday-tips");
    if (!box) {
        return;
    }

    if (box.classList.contains("hidden")) {
        box.classList.remove("hidden");
    } else {
        box.classList.add("hidden");
    }
}

// Show a simple message when the form is submitted
function showFormMessage() {
    var message = document.getElementById("form-message");
    if (message) {
        message.textContent = "Thanks! Your form is being sent.";
    }
    // The form still submits to the Google Sheet.
}
