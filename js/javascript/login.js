// $(document).ready (function(){
//   console.log("jquery Loaded");
//   $("#loginForm").submit(login)


//  })
function login() {
    event.preventDefault();
    const email = $("#email").val();
    const password = $("#pass").val();
    if (password.length < 8) {
        alert("password must be greater than 8 digits");
        return false;
    }
    else {

        UserService.login(email, password).then(res => {
            if (res.data.docs.length != 0) {
                let data = res.data;
                console.log(data);
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data.docs[0]));
                console.log(data.docs[0]);
                if(data.docs[0].role == "user"){
                
                    alert("login successful");
                window.location.href="listplan.html";
                    
                }else if(data.docs[0].role == "admin"){
                    alert("login successful");
                    window.location.href="displaypage.html";
                }

            } 
            
            else {
                alert("Invalid Crdentials");
            }
         } ).catch(err => {
            console.log(err.response.data);
            alert("login failed");
        })
    }

}
