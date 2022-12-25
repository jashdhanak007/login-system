let singledata = localStorage.getItem('chekUserLogin');

if(!singledata){
    window.location.href = 'login.html';
}