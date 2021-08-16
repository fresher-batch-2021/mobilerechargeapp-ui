function register(){
    event.preventDefault() 
   const name= document.querySelector("#name").value;
   const email= document.querySelector("#email").value;
   const password= document.querySelector("#password").value;
   if(password.length<8)
   {
       alert ("password must be atleast 8 digits");
       return false;
   }
   else if(name==null||name==""||name.trim()=="")
   {
       alert("name cannot be empty");
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
    const userName="apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
    const dbpassword="68fc5b9dc8c58071087abaecc44a5f29";
    const basicAuth = 'Basic ' + btoa(userName + ':' + dbpassword);

    const url="https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users"
    axios.post(url, registerObj,{ headers: {'Authorization': basicAuth }}).then(res => {
        console.log(res.data);
        alert("Successfully registered");
        window.location.href="login.html";
    }
    ).catch(err => {

        alert("Unable to register");
    })
}
}