function validate(){
    //store values as username and Password
    let userName = 'Janith';
    let pass = '1234';

    let uname = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if(uname === '' || password === ''){
        // alert('Please Enter UserName and Password!');
        document.getElementById('error').innerHTML = "User Name and Password cannot be Empty!";
    }else{
        if(userName === uname){
            if(password === pass){
                location.replace("home.html");
            }
            else{
               document.getElementById('error').innerHTML = "Incorrect Password!";
            }
        }else{
            document.getElementById('error').innerHTML = "Invalid User Name!";
        }
    }
}