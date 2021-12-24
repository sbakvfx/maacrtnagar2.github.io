console.log("This is project 4");

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('sphone');

let validemail=false;
let validmobile=false;
let validfname=false;
let validlname=false;


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

                



                $('#failure').hide();
                $('#success').show();


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

