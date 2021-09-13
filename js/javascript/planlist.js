UserService.listPlan().then(res => {
    let data = res.data;
    console.log(data)
    tableData = data.rows;
    displayTable(tableData);
    console.log("Success");
}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.log(errorMessage);
    console.log("Fail");
    alert("Error-" + errorMessage);
});

function displayTable(tableData) {
    let content = "";
    for (let taskObj of tableData) {
        $("#content tbody").empty();
        console.log(taskObj)
        content = content + `<tr><td>${taskObj.doc.provider}</td><td>${taskObj.doc.price}</td>
            <td>${taskObj.doc.validity}</td><td>${taskObj.doc.description}</td><td><a href="prepaid.html?provider=${taskObj.doc.provider}&price=${taskObj.doc.price}&validity=${taskObj.doc.validity}">recharge</a></td></tr>`;
        $("#content tbody").append(content);
    }
}