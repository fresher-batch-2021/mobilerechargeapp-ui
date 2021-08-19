function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (password.length < 8) {
        alert("password must be greater than 8 digits");
        return false;
    }
    else {
        const obj = {
            selector: {
                email: email,
                password: password
            }, fields: ["_rev", "_id", "name", "email", "password",]
        }

        console.log(obj);
        UserService.login(email, password).then(res => {
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res.data.docs[0]));
            alert("login successful");
            window.location.href = "planlist.html";
        }).catch(err => {
            console.log(err.response.data);
            alert("login failed");
        })
    }

}