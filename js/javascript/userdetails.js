function userDetails(){
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr):null;
    console.log(user)
    let content =`<h1>`+"Balance  : "+`${user.balance}</h1>`;
        document.querySelector("#userName").innerHTML = content;
}
userDetails()

function addMoney(){
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr):null;
    console.log(user)
    const money=document.querySelector("#addmoney").value
    
    updatedData = {
        'name' : user.name,
        'email' : user.email,
        'password': user.password,
        'balance' : parseInt(user.balance) + parseInt(money)
    }
    UserService.update(updatedData, user._id, user._rev).then(res=>{
        console.log("updated Status : ",res.data);
        alert("Added To wallet");
    }).catch(err=>{
        alert("Faild To load Money")
    })
    
}


