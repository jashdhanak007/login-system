profileinfo()
let alldata = localStorage.getItem('chekUserLogin');
let uservalue = JSON.parse(alldata);

document.getElementById('user3ImageName').innerHTML = uservalue.name;
document.getElementById('user3ImageEmail').innerHTML = uservalue.email;
document.getElementById('user2ImageName').innerHTML = uservalue.name;
document.getElementById('user2ImageEmail').innerHTML = uservalue.email;
document.getElementById('showimage').innerHTML = "<img src='upload/" + uservalue.image + "'width='100'>"

let name = document.getElementById('name').value = uservalue.name;
let email = document.getElementById('email').value = uservalue.email;
let password = document.getElementById('password').value = uservalue.password;
let grid = document.getElementById('profileid').value = uservalue.grid;     

function profile() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let grid = document.getElementById('profileid').value;
    let image = document.getElementById('image').value;
    let setImage = image.replace(/.*(\/|\\)/, '');

    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);
    let viewData = localStorage.getItem('chekUserLogin');
    let viewImage = JSON.parse(viewData);
    
    for (let i in uservalue) {
        if (uservalue[i].grid == grid) {
            uservalue[i].name = name;
            uservalue[i].email = email;
            uservalue[i].password = password;
            uservalue[i].image = setImage;
            viewImage.image = setImage;
            viewImage.name = name;
            viewImage.email = email;
        }

        let st = JSON.stringify(uservalue);
        localStorage.setItem('register', st);
        let st1 = JSON.stringify(viewImage);
        localStorage.setItem('chekUserLogin', st1);
        alert('Successfully Updated !!');
        window.location.href = "index.html";
    }
    profileinfo();
}

// Display Images

function profileinfo() {
    let viewData = localStorage.getItem('chekUserLogin');
    let viewImage = JSON.parse(viewData);
    let img = 'upload/' + viewImage.image.replace(/.*(\/|\\)/, '');
    document.getElementById('user1').setAttribute('src', img);
    document.getElementById('user2').setAttribute('src', img);
    document.getElementById('user3').setAttribute('src', img);
    document.getElementById('user4').setAttribute('src', img);
    document.getElementById('showimage').setAttribute('src', img);
}

function loadFile(event) {
    let image = document.getElementById("showimage");
    image.src = URL.createObjectURL(event.target.files[0]);
};

function logout() {
    localStorage.removeItem('chekUserLogin');
    window.location.href = "login.html";
};

