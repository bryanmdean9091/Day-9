
function handleEnter(event) {
    if (event.key === "Enter") {
        const form = document.getElementById('form');
        const index = [...form].indexOf(event.target);
        form.elements[index + 1].focus();
         event.preventDefault()
    }
};


 const firstName = document.getElementById('firstName');
 const lastName = document.getElementById('lastName');
 const phone = document.getElementById('phone');
 const submit = document.getElementById('submitBtn');
 submit.addEventListener("click", collectInfo);

function collectInfo() {
    const phoneNum = (phone.value)
    console.log(phoneNum.length)
    if  (firstName.value == "") {
    alert('Please Enter a Valid First Name')
    }
    else if (lastName.value == "") {
        alert('Please Enter a Valid Last Name')
    }
    else if (phoneNum.length != 10  ) {
        alert('Please Enter a Valid Phone Number')
    }
    else {
        document.getElementsByClassName('formBox')[0].classList.add('hidden');
        document.getElementsByClassName('resetBtn')[0].classList.remove('hidden');
        document.getElementsByClassName('resetBtn')[0].classList.add('show');
        const resetButton = document.getElementById('reset');
        resetButton.addEventListener("click", resetScreen)
        document.getElementById('userPrintout').innerHTML = `Hello ${firstName.value} ${lastName.value}. Your phone number is ${phoneNum}.`
        event.preventDefault() 
    }
};

function resetScreen() {
    window.location.reload()
};

