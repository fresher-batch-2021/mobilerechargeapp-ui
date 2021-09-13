function addPlan() {
    event.preventDefault()
    const network = document.getElementById("provider").value;
    const price = document.getElementById("price").value;
    const validity = document.getElementById("validity").value;
    const description = document.getElementById("description").value;
    const planObj = {
        "provider": network,
        "price": 'Rs.' + price,
        "validity": validity,
        "description": description
    }
    console.log(planObj)
    UserService.addPlan(planObj).then(res => {
        letdata = res.data;
        console.log(planObj);
        alert("Plan Successfully Added");
    }).catch(err => {
        console.error(err.message);
        alert("Unable to Add Plan.. ");
    });

}