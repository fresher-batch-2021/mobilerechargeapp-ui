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
    if(money==0){
        alert("enter the amount")
    }else{
        let Obj={
            "amount":money
      }
        const url="https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud/wallet";
        console.log(url);
        axios.post(url,Obj).then(res=>console.log(res.data))
    }
    
}