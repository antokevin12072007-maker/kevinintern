function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let dept = document.getElementById("dept").value;

    if (name == "" || email == "" || phone == "" || password == "" || dept == "") {
        alert("Please fill all fields");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits only");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain minimum 6 characters");
        return false;
    }

    alert("Registration Successful");

    return true;
}