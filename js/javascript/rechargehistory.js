
UserService.listHistory().then(res=>{
    let data = res.data.rows;
    let content = '';
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    let i=1;

    for(let history of data){
    const rechargeDate=history.doc.rechargeDate.substr(0,10)
    console.log(rechargeDate)
    const expiryDate=history.doc.expiryDate.substr(0,10)
    // console.log(expiryDate)
        console.log(history.doc)
        if(history.doc.email == user.email){
            content += `
            <tr>
            <td>${i++}</td>
            <td>${history.doc.provider}</td>
            <td>${history.doc.price}</td>
            <td>${history.doc.phoneNumber}</td>
            <td>${expiryDate}</td>
            <td>${history.doc.validity} days</td>
            <td>${rechargeDate}</td>
            </tr>
            `;
        }
    }
    document.querySelector("#historyDetails").innerHTML = content;
}).catch(err=>{
    alert("failed");
})