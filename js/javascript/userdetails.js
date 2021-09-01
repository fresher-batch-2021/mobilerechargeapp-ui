function userDetails() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
}
userDetails()

function addMoney() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user)
    const money = document.querySelector("#addmoney").value


    UserService.userDetails(user._id).then(result1 => {
        console.log(result1.data)
        const data = result1.data
       let updatedData = {
            'name': data.name,
            'email': data.email,
            'password': data.password,
            'balance': parseInt(data.balance) + parseInt(money),
            'role': user.role
        }
        console.log(data)
        UserService.update(updatedData, data._id, data._rev).then(res => {
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
            console.log(data);
            console.log("updated Status : ", res.data);
            alert("Added To wallet");
            window.location.href = 'listplan.html'
        }).catch(err => {
            alert("Faild To load Money")
        })


    });

}
function reduceMoney() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    // const amount = document.querySelector("#paymentType").value;
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const price = urlParams.get('price');
    let _price = "";
    for (let i = 3; i < price.length; i++) {
        _price += price[i];
    }
    UserService.userDetails(user._id).then(res => {
        console.log(res.data);
        const data = res.data
        let balance = {
            'name': data.name,
            'email': data.email,
            'password': data.password,
            'balance': parseInt(data.balance) - parseInt(_price),
            'role': user.role
        }
        console.log(balance)
        UserService.data(balance, data._id, data._rev).then(response => {
            console.log("updated Status : ", response.data);
            console.log(response.data)
            alert("Amount debited successfully");
            historyUpdate();
        }).catch(err => {
            alert("Faild To load Money")
        })
    }).catch(err => console.error(err.message))



}
function historyUpdate() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user.email);
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const simName = urlParams.get('provider');
    const price = urlParams.get('price');
    const validity = urlParams.get('validity');
    const number = urlParams.get('mobilenumber');

    let date = new Date();
    const historyObj = {
        "email": user.email,
        "provider": simName,
        "price": price,
        "phoneNumber": number,
        "validity": validity,
        "rechargeDate": date
    }
    UserService.history(historyObj).then(result => {
        alert("History created");
    }).catch(err => {
        alert("Failed to create History");
    })
}
function walletBalance() {

    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user._id)
    UserService.userDetails(user._id).then(res => {
        console.log(res.data);
        let content = `<h1>` + "Balance  : " + `${res.data.balance}</h1>`;
        document.querySelector("#userName").innerHTML = content;
    }).catch(err => console.error(err.message))
}
walletBalance();

