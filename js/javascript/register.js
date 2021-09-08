$(document).ready(function(){
    console.log("jquery Loaded");
    $("#regForm").submit(register);
})
function register() {
    event.preventDefault()
    const name = $("#name").val();
    const email = $("#email").val();
    const mobilenumber = $("#mobilenumber").val();
    const password = $("#password").val();

    try {
        Validator.isValidString(name, "name cannot be empty");
        Validator.isValidPassword(password, "password must be atleast 8 digits");
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