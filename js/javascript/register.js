function register(){
    event.preventDefault() 
   const name= document.querySelector("#name").value;
   const email= document.querySelector("#email").value;
   const password= document.querySelector("#password").value;
   if(password.length<8)
   {
       alert ("password must be greater than 8");
       return false;
   }
   else if(name==null||name==""||name.trim()=="")
   {
       alert("invalid name");
       return false;
   }
   else
   {
      
    const registerObj={
        "name":name,
        "email":email,
        "password":password,
    };
    console.log(registerObj);
    const url="https://product-mock-api.herokuapp.com/rechargeapp/api/v1/auth/register";
    axios.post(url, registerObj).then(res => {
        alert("Successfully registered");
        window.location.href="login.html";
    }
    ).catch(err => {
        alert("Unable to register");
    })
}
}