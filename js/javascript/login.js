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
            selector:{
                    email:email,
                    password:password
                },fields:["_rev","_id","name","email","password",]
                }
        
        console.log(obj);
        const userName="apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
    const dbpassword="68fc5b9dc8c58071087abaecc44a5f29";
    const basicAuth = 'Basic ' + btoa(userName + ':' + dbpassword);
    const url="https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/rechargeapp_users/_find"
    axios.post(url,obj,{ headers: {'Authorization': basicAuth }}).then(res => {
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res.data.docs[0]));
            alert("login successful");
            window.location.href = "planlist.html";
        }).catch(err => {
            console.log(err.response.data);
            alert("login failed");
        })
    }

}