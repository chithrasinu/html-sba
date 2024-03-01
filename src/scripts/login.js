function initializeUsers(){

let users = [
    {
        "userName": "test",
        "password": "test",
        "displayName": "Test Name"
    },
    {
        "userName": "user",
        "password": "123456",
        "displayName": "Test User"
    }
];
let userContent = JSON.stringify(users);
localStorage.setItem("my-users",  userContent);
}

function valdateLogin() {
    //alert(localStorage.getItem("my-users"));
    if(localStorage.getItem("my-users") === null)
        initializeUsers();

    let uName = document.getElementById('login_name').value;
    let pwd = document.getElementById('login_pwd').value;
    
    let isValidUser = false;
    let validUser = undefined;
    let userContent = localStorage.getItem("my-users");
    let users = JSON.parse(userContent);
    
    users.forEach(element => {
        if(element.userName === uName && element.password === pwd){
            isValidUser = true;
            validUser = element;
        }
    });
    if(isValidUser == true)
        location.href = "home.html?name=" + validUser.displayName;
    else {
        document.getElementById('login_pwd').value = '';
        alert('Incorrect login');
    }
    return false;
}

function register(){
    let uName = document.getElementById('loginName').value;
    let pwd = document.getElementById('pwd').value;
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;

    let userContent = localStorage.getItem("my-users");
    let users = JSON.parse(userContent);

    users.push({
        userName: uName,
        password: pwd,
        displayName: fName + " " + lName
    });

    userContent = JSON.stringify(users);
    localStorage.setItem("my-users",  userContent);

    alert('Congrats! Successfully Registered.')
    location.href = "login.html";

    return false;
}