console.log("This is project 4");

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('sphone');
const slct1 = document.getElementById('slct1');
const message = document.getElementById('message');


let validemail=false;
let validmobile=false;
let validfname=false;
let validlname=false;
let validmessage=false;


$('#failure').hide();
$('#success').hide();


// console.log(name,email, mobile);

fname.addEventListener('blur',()=>{
console.log("first name isblurred");
let regex =/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
let str= fname.value;
console.log(regex, str);
if (regex.test(str)){
    console.log("Your first name is valid");
    fname.classList.remove('is-invalid');
    validfname = true;
}
else{
    console.log("Your first name is not valid");
    fname.classList.add('is-invalid');
    validfname = false;

}
});

lname.addEventListener('blur',()=>{
    console.log("last name isblurred");
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str= lname.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log("Your last name is valid");
        lname.classList.remove('is-invalid');
        validlname = true;
    }
    else{
        console.log("Your last name is not valid");
        lname.classList.add('is-invalid');
        validlname = false;
    
    }
    });


email.addEventListener('blur',()=>{
    console.log("email isblurred");
    // let regex =/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    var regex = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+).([a-z]{2,7})(.[a-z]{2,7})?$/;

    let str= email.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
    validemail = true;

    }
    else{
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
    validemail = false;

    }
    
    });

    mobile.addEventListener('blur',()=>{
        console.log("mobile isblurred");
        let regex = /^[6-9][0-9]{9}$/;
        // let regex =/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
let str= mobile.value;
console.log(regex, str);
if (regex.test(str)){
    console.log("Your mobile number is valid");
    mobile.classList.remove('is-invalid');
    validmobile = true;

}
else{
    console.log("Your mobile number is not valid");
    mobile.classList.add('is-invalid');
    validmobile = false;

}
        });

      
       message.addEventListener('blur',()=>{
    console.log("last name isblurred");
    // let regex =/^[a-zA-Z\d\,\s]){20,30}+$/;
    let str= message.value;
    // console.log(regex, str);
    console.log(str);


    // if (regex.test(str)){
        
    //         console.log("Your last name is valid");
    //     message.classList.remove('is-invalid');
    //     validmessage = true;               

               
    // }
    // else{
    //     console.log("Your last name is not valid");
    //     message.classList.add('is-invalid');
    //     validmessage = false;    
    //     }

    if(str.replace(/\s/g, "").length<=15){
            
        console.log("no white space empty field are allowed");
        message.classList.add('is-invalid');
        validmessage = true;

        }
        else {
            console.log("Your last name is valid");
            message.classList.remove('is-invalid');
            validmessage = false;
        } 

    });

       


        let submit = document.getElementById('submit');
        submit.addEventListener('click', (e)=> {
            e.preventDefault();
            console.log('YOu clicked on submit');
            console.log('valid email, valid mobile, valid fname, valid lname');

            if(validemail && validmobile && validfname && validlname){
                let failure = document.getElementById('failure');

                console.log('mobile, email and name are valid. submitting the form.');
                let success = document.getElementById('success');
                success.classList.add('show');
                // failure.classList.remove('show');
                // $('#failure').alert('close');
                
                sendmail();

                function sendmail() {

                    //         \d -match any digit (equal to [0-9])
                    // \w -match any word character (a-z, A-Z, 0-9 & _)
                    // \s -match whitespace character (eg - spaces & tabs)
                    // \t -match a tab only
        
                   
            var fname = $('#fname').val();
            var lname = $('#lname').val();
            var email = $('#email').val();
            var mobile = $('#sphone').val();
            var slct1 = $('#slct1').val();
            var message = $('#message').val();
        
                    const Body = 'Name: ' + fname + ' ' + lname + ' <br> Email: ' + email + '<br> Mobile No: ' + mobile + '<br> Interested In : ' +slct1+ '<br> Message: ' + message;
                    //console.log(name, phone, email, message);
        
                    Email.send({
                        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
                        // To: 'optimalweb09@gmail.com',
                        To: 'maacrtnagarads@gmail.com',
        
                        // From: "demooptimalweb@gmail.com",
                        From: "sbakvfx@gmail.com",
        
                        Subject: "New message on contact from " + fname,
                        Body: Body
                    }).then(
                        message => {
                            //console.log (message);
                            if (message == 'OK') {
                                alert('Your mail has been sent. Thank you for connecting.');
                            }
                            else {
                                console.error(message);
                                alert('There is error at sending message. ');
        
                            }
        
                        }
                    );         
                }                               


                $('#failure').hide();
                $('#success').show();                
                
                // document.form.submit();
                document.form.reset();                            
            }

            else{
                console.log('one of mobile, email and name are not valid, hence not submitting the form. please correct the errors and try again');

                let failure = document.getElementById('failure');
                failure.classList.add('show');
                // success.classList.remove('show');
                // $('#success').alert('hide');
                $('#success').hide();
                $('#failure').show();
            }

        })



