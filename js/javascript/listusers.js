UserService.listUsers().then(res => {
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
    content = content + `<tr>
        <td>${taskObj.doc.name}</td>
        <td>${taskObj.doc.mobilenumber}</td>
        <td>${taskObj.doc.email}</td>
        <td><button type='button' onclick="deleteFun('${taskObj.doc._id}','${taskObj.doc._rev}')">Delete</button>
        </td>
    </tr>`;
    $("#content tbody").append(content);
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
    function searchFun() {
        let searchInput = document.getElementById("myInput").value.toUpperCase();
        let myTable = document.getElementById("content");
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
