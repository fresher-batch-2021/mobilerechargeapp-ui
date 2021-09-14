UserService.listPlan().then(res => {
    let data = res.data;
    console.log(data)
    let planData = data.rows;
    displayTable(planData);
    console.log("Success");
}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.log(errorMessage);
    console.log("Fail");
    alert("Error-" + errorMessage);
});

function displayTable(planData) {
    let content = "";
    for (let listObj of planData) {
        $("#content tbody").empty();
        console.log(listObj)
        content = content + `<tr><td>${listObj.doc.provider}</td><td>${listObj.doc.price}</td>
            <td>${listObj.doc.validity}</td><td>${listObj.doc.description}</td><td><a href="prepaid.html?provider=${listObj.doc.provider}&price=${listObj.doc.price}&validity=${listObj.doc.validity}">recharge</a></td></tr>`;
        $("#content tbody").append(content);
    }
}