function register() {
    event.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        Validator.isValidString(name, "name cannot be empty");
        Validator.isValidPassword(password, "password must be atleast 8 digits");
        const registerObj = {
            "name": name,
            "email": email,
            "password": password,
            "balance":0
        };
        console.log(registerObj);
        UserService.register(registerObj).then(res => {
            console.log(res.data);
            alert("Successfully registered");
            window.location.href = "login.html";
        }
        ).catch(err => {

            alert("Unable to register");
        })
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("unable to register");
    }

}