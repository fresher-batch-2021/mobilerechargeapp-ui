function userDetails(){
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr):null;
    console.log(user)
    let content =`<h1>${user.balance}</h1>`;
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
        const url=`https://product-mock-api.herokuapp/rechargeapp/api/v1/users/${user.id}/wallet`;
        console.log(url);
        axios.patch(url,Obj).then(res=>console.log(res.data))
    }
    
}