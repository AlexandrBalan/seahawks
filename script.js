//turn dark mode on or off
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

//show or hide the tips box
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

//show a message when the form has been submitted to google sheets
function showFormMessage() {
    var message = document.getElementById("form-message");
    if (message) {
        message.textContent = "Thanks! Your form is being sent.";
    }

}
