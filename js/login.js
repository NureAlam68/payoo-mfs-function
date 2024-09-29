//input number and pin

//step-1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event) {
    //step-2 stop loading browser
    event.preventDefault();
    // console.log('log in')

    //step-3 get the phone number and pin
    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    // console.log(phoneNumber);
    // console.log(pinNumber);

    //step-4 number and pin match ..this is temporary. don,t like this
    if(phoneNumber === '888000' && pinNumber === '1234') {
        console.log('you are logged in');
        //step-5 allow use this website
        window.location.href = '/home.html'
    } 
    else {
        alert('Wrong phone or pin !');
    }
});