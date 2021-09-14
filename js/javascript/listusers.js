UserService.listUsers().then(res => {
    let data = res.data;
    console.log(data)
   let userData = data.rows;
    displayTable(userData);
    console.log("Success");
    }).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.log(errorMessage);
    console.log("Fail");
    alert("Error-" + errorMessage);
    });

    function displayTable(userData) {
    let content = "";
    for (let userObj of userData) {
        $("#content tbody").empty();
    content = content + `<tr>
        <td>${userObj.doc.name}</td>
        <td>${userObj.doc.mobilenumber}</td>
        <td>${userObj.doc.email}</td>
        <td><button type='button' onclick="deleteFun('${userObj.doc._id}','${userObj.doc._rev}')">Delete</button>
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
