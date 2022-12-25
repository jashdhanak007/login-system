function login() {

    let useremail = document.getElementById('email').value;
    let userpass = document.getElementById('password').value;
    // let name = document.getElementById('').value;
    let check = 0;
    let allData = localStorage.getItem('register');
    let value = JSON.parse(allData);

    for (let i in value) {
        if (value[i].email == useremail && value[i].password == userpass) {
            window.location.href = 'index.html';
            let st = JSON.stringify(value[i]);
            localStorage.setItem('chekUserLogin', st);
            check = 1;
        }
    }
    if (check != 1) {
        alert("Email and Password and Role something wrong");
    }
}

let check = localStorage.getItem('chekUserLogin');

if (check) {
    window.location.href = 'index.html';
}

