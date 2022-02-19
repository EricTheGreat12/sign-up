

function checkPword() {
    let pword = document.getElementById("pword");
    let confirmPword = document.getElementById("confirmPword");
    let pwordMismatch = document.getElementById("pwordMismatch");
    if (pword.value === confirmPword.value) {
        pword.classList.remove("invalid");
        pwordMismatch.classList.add("hidden");
        confirmPword.classList.remove("invalid");
        return true;
        }
    else {
        pword.classList.add("invalid");
        pwordMismatch.classList.remove("hidden");
        confirmPword.classList.add("invalid")
        return false;
    }
}