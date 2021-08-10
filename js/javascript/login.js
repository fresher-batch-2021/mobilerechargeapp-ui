function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (password.length < 8) {
        alert("password is invalid");
        return false;
    }
    else {
       
        

        const obj = {
            "email": email,
            "password": password
        }
        console.log(obj);
        const url = "https://product-mock-api.herokuapp.com/rechargeapp/api/v1/auth/login";
        axios.post(url,obj).then(res => {
            alert("login successful");
             window.location.href="recharge.html";
        }).catch(err => {
            alert("login failed");
        })
    }

}