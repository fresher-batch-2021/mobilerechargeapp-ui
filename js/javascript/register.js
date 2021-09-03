function register() {
    event.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobilenumber = document.querySelector("#mobilenumber").value;
    const password = document.querySelector("#password").value;

    try {
        Validator.isValidString(name, "name cannot be empty");
        Validator.isValidPassword(password, "password must be atleast 8 digits");
        Validator.isValidMobilenumber(mobilenumber,"incorrect format");
        const data = {
            "selector": {
                "$or": [
                    { "email": email },
                    { "mobilenumber": mobilenumber }
                ]
            }
        }
        UserService.isExist(data).then(res => {
            if (res.data.docs.length == 0) {
                const registerObj = {
                    "name": name,
                    "email": email,
                    "mobilenumber": mobilenumber,
                    "password": password,
                    "balance": 0,
                    "role": "user"
                };
                console.log(registerObj);
                UserService.register(registerObj).then(res => {
                    console.log(res.data);
                    Swal.fire('successfully registered');
                    myFunction();
                }
                ).catch(err => {

                    alert("Unable to register");
                })
            }else{
                alert("Email or Mobile Number Already Exists");
            }
        })

    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("unable to register");
    }


}


function myFunction() {
    setTimeout(function () { window.location.href = "login.html"; }, 3000);
}