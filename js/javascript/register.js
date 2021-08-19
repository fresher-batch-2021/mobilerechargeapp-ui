function register() {
    event.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (password.length < 8) {
        alert("password must be atleast 8 digits");
        return false;
    }
    else if (name == null || name == "" || name.trim() == "") {
        alert("name cannot be empty");
        return false;
    }
    else {

        const registerObj = {
            "name": name,
            "email": email,
            "password": password

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
    }
}