//add new user function
function add(){
    document.getElementById('adduser').style.visibility = "visible";
}
//back from the add new user form
function back(){
    document.getElementById('adduser').style.visibility = "hidden";
}
//function for validate form details
function sub(){
    let name = document.getElementById('name').value; 
    let city = document.getElementById('city').value; 
    let mobile = document.getElementById('phone').value; 
    let password = document.getElementById('password').value; 
    if(name === '' || city === '' || mobile === '' || password === ''){
        document.getElementById('error').innerHTML = "All fields are required";
    }else{
        document.getElementById('nam').innerHTML= name;
        document.getElementById('cit').innerHTML= city;
        document.getElementById('pho').innerHTML= mobile;
        document.getElementById('card1').style.display = "block";
        document.getElementById('adduser').style.visibility = "hidden";
    }
}
//sign out button function
function out(){
    location.replace('login.html');
}
// function for check the password matching
function match(){
    let password = document.getElementById('password').value;
    let conf = document.getElementById('confirm').value;
    if(password === conf && conf !=''){
        document.getElementById('error').style.color = "green";
        document.getElementById('error').innerHTML = "Passwords Match";
    }else if(password === conf && conf ===''){
        document.getElementById('error').innerHTML = "";
    }else {
        document.getElementById('error').style.color = "red";
        document.getElementById('error').innerHTML = "Passwords Mismatch";
    }
}