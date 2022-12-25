
let data = [];

function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;

    if (name && email && password && role) {
        let obj = {
            name: name,
            email: email,
            password: password,
            role: role,
            grid : Math.floor(Math.random() * 10000),
            image : "10.png"
        }

        if (localStorage.getItem('register') === null || undefined) {
            data.push(obj);
            let st = JSON.stringify(data);
            localStorage.setItem('register', st);
        } else {
            let alldata = localStorage.getItem('register');
            let value = JSON.parse(alldata);
            data = value;
            data.push(obj);
            let st = JSON.stringify(data);
            localStorage.setItem('register', st);
        }
        
        alert("user successfully register");
        window.location.href = "login.html"
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";

    } else {
        alert("Please Fill The Detail !!")
    }
}