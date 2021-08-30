
UserService.listHistory().then(res=>{
    let data = res.data.rows;
    content = '';
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    for(let history of data){
        console.log(history)
        if(history.doc.email == user.email){
            content += `
            <tr>
            <td>${history.doc.provider}</td>
            <td>${history.doc.price}</td>
            <td>${history.doc.phoneNumber}</td>
            <td>${history.doc.validity}</td>
            <td>${history.doc.rechargeDate}</td>
            </tr>
            `;
        }
    }
    document.querySelector("#historyDetails").innerHTML = content;
}).catch(err=>{
    alert("failed");
})