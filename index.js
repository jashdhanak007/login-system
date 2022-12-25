let singldata = localStorage.getItem('chekUserLogin');
let val = JSON.parse(singldata);

document.getElementById('name').innerHTML = val.name;
document.getElementById('email').innerHTML = val.email;

// let st1 = JSON.stringify(val);
// localStorage.setItem('chekUserLogin', st1);

function logout() {
    localStorage.removeItem('chekUserLogin');
    window.location.href = "login.html";
}



view();
function view() {
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);
    let num = 1;

    let date = new Date();
    let alldata = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();

    let time = parseInt((date.getHours())) + ":" + parseInt(date.getMinutes()) + ":" + parseInt(date.getSeconds());
    let admin = JSON.parse(localStorage.getItem('chekUserLogin'));

    let tbl = "";
    tbl += `<tr>
                <th>No.</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
                <th>Edit || Print</th>
                <th>Date</th>
                <th>Time</th>

              
            </tr>`;

    for (let i in uservalue) {
        tbl += `<tr>
                    <td>${num++}</td>
                    <td><img src="upload/${uservalue[i].image}" class="light-logo" width="40" style="border-radius:50%"></td>
                    <td>${uservalue[i].name}</td>
                    <td>${uservalue[i].email}</td>`

        if (uservalue[i].role == "admin") {
            if (admin.email == uservalue[i].email && admin.role == "admin") {
                tbl += `<td><button name="role" onclick="changeRoleUser('${uservalue[i].email}')" class="btn btn-light" disabled>${uservalue[i].role}</button></td>`;
                tbl += `<td><button class="btn btn-light" onclick="deldata('${uservalue[i].grid}') disabled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                   </svg>
          </button></td>`

            } else {
                tbl += `<td><button name="role" onclick="changeRoleUser('${uservalue[i].email}')" class="btn btn-light">${uservalue[i].role}</button></td>`
                tbl += `<td><button class="btn btn-light" onclick="deldata('${uservalue[i].grid}') disabled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                   </svg>
          </button></td>`
            }
        }
        else {
            if (uservalue[i].role == "user") {
                if (admin.email == uservalue[i].email && admin.role == "user") {
                    tbl += `<td><button name="role" onclick="changeRoleAdmin('${uservalue[i].email}')" class="btn btn-light">${uservalue[i].role}</button></td>`
                    tbl += `<td><button class="btn btn-light" onclick="deldata('${uservalue[i].grid}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                               </button></td>`
                } else {
                    tbl += `<td><button name="role" onclick="changeRoleAdmin('${uservalue[i].email}')" class="btn btn-light">${uservalue[i].role}</button></td>`
                    tbl += `<td><button class="btn btn-light" onclick="deldata('${uservalue[i].grid}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                               </button></td>`
                }
            }
        }
        tbl += `<td>
                    <button class="btn btn-light" onclick="print()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                        </svg>
                    </button>

                    <button class="btn btn-light"><a href="profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></a>
                    </button>
                </td>`;
        tbl += `<td>${alldata}</td>`;
        tbl += `<td>${time}</td>`;
        tbl += `</tr>`;
    }
    document.getElementById('tbldata').innerHTML = tbl;
}

function changeRoleUser(email) {
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for (let i in uservalue) {
        if (uservalue[i].email == email) {
            uservalue[i].role = "user";
        }
    }
    alert("Role Successfully Changed !!")
    let st = JSON.stringify(uservalue);
    localStorage.setItem('register', st);
    view();
}

function changeRoleAdmin(email) {
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for (let i in uservalue) {
        if (uservalue[i].email == email) {
            uservalue[i].role = "admin";
        }
    }
    alert("Role Successfully Changed !!")
    let st = JSON.stringify(uservalue);
    localStorage.setItem('register', st);
    view();
}

function deldata(grid) {
    let register = localStorage.getItem('register');
    let uservalue = JSON.parse(register);

    for (let i in uservalue) {
        if (uservalue[i].grid == grid) {
            uservalue.splice(i, 1);
        }
    }
    alert('Successfylly Deleted !!')
    let st = JSON.stringify(uservalue);
    localStorage.setItem('register', st);
    view();
}

