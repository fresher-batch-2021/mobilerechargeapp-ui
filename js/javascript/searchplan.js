UserService.searchPlan().then(res => {
    let data = res.data;
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
        $("#planDetails tbody").empty();
        const validity=taskObj.doc.validity.substr(0,2)
        const validityDate=parseInt(validity)
        console.log(validityDate)

        content = content +
            `<tr>
            <td>${taskObj.doc.provider}</td>
            <td>${taskObj.doc.price}</td>
            <td>${taskObj.doc.validity} Days</td>
            <td>${taskObj.doc.description}</td>
            <td><a href="editplan.html?id=${taskObj.doc._id}&rev=${taskObj.doc._rev}&provider=${taskObj.doc.provider}&price=${taskObj.doc.price}&validity=${validityDate}&description=${taskObj.doc.description}">Edit</a></td>
            <td><button type='button' onclick="deleteFun('${taskObj.doc._id}','${taskObj.doc._rev}')">Delete</button></td>
            </tr>`;
        $("#planDetails tbody").append(content);
    }
}
function searchFun() {
    let searchInput = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById("planDetails");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[0];
        if (tableDatas) {
            let textValue = tableDatas.textContent || tableDatas.innerText;
            if (textValue.toUpperCase().indexOf(searchInput) > -1) {
                tableRow[i].style.display = "";

            } else {
                tableRow[i].style.display = "none";
            }
        }


    }
}

function deleteFun(id,revId) {
    alert("Function Works");
    console.log(id, revId);
    UserService.deleteUser(id,revId).then(res => {
        alert("Success");
        window.location.reload();
    }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.log(errorMessage);
        alert("Failed");
        alert("Error -" + errorMessage);
    });
}