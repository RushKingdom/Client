var modal = document.getElementById("modal");
var loginButton = document.getElementById("loginButton");
var closeButton = document.getElementsByClassName("close")[0];
var modalLoginButton = document.getElementById("modalLoginButton");

loginButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

modalLoginButton.addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "RKCAdmin" && password === "2023") {
        window.location.href = "https://www.google.de";

        console.log(`Benutzer ${username} hat sich erfolgreich eingeloggt.`);
        console.log(`IP-Adresse: ${req.ip}`);

    } else {
        alert("Falsche Anmeldeinformationen. Bitte versuche es erneut.");
    }
});
