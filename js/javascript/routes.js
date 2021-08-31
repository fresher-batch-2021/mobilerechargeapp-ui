const routes=[
    {path:'index.html'},
    {path:'login'},
    {path:"register"},
    {path:'listplan.html',roles:["user"]},
    {path:'wallet.html',roles:['user']},
    {path:'history.html',roles:['user']},

];

function checkAccess(pageName, role) {
    let isAllowed = false;
    for (let route of routes) {
        if (route.path == pageName) {
            if (!route.roles) {
                isAllowed = true;
                break;
            } else if (route.roles.includes(role)) {
                isAllowed = true;
                break;
            }
        }
    }
    return isAllowed;
}

(function(){
let user=JSON.parse(localStorage.getItem('LOGGED_IN_USER'));
let role=user!=null?user.role:null;
console.log(user)
console.log(role)
let pathName = window.location.pathname.substr(1);
console.log(pathName)
let allowedAccess = checkAccess(pathName, role);
console.log("Access :", allowedAccess);

if (!allowedAccess) {
    alert("You are not authorized to access this page. Redirecting to login page");
   window.location.href = "login.html";
}

})()