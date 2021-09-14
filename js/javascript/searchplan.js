UserService.searchPlan().then(res => {
    let data = res.data;
    let searchData = data.rows;
    displayTable(searchData);
    console.log("Success");
}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.log(errorMessage);
    console.log("Fail");
    alert("Error-" + errorMessage);
});

function displayTable(searchData) {
    let content = "";
    for (let searchObj of searchData) {
        $("#planDetails tbody").empty();
        const validity=searchObj.doc.validity.substr(0,2)
        const validityDate=parseInt(validity)
        console.log(validityDate)

        content = content +
            `<tr>
            <td>${searchObj.doc.provider}</td>
            <td>${searchObj.doc.price}</td>
            <td>${searchObj.doc.validity} Days</td>
            <td>${searchObj.doc.description}</td>
            <td><a href="editplan.html?id=${searchObj.doc._id}&rev=${searchObj.doc._rev}&provider=${searchObj.doc.provider}&price=${searchObj.doc.price}&validity=${validityDate}&description=${searchObj.doc.description}">Edit</a></td>
            <td><button type='button' onclick="deleteFun('${searchObj.doc._id}','${searchObj.doc._rev}')">Delete</button></td>
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