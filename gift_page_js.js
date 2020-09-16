var checkBox = document.querySelectorAll('.t-checkbox');
    
console.log(checkBox);

checkBox.forEach(function(box) {
    var formBox = box.closest('.t-form__inputsbox'),
        submit = formBox.querySelector('button');

    console.log(formBox);
    console.log(submit);

    if (box.checked) {
        console.log("checked");
    } else {
        console.log("You didn't check it! Let me check it for you.");
        submit.setAttribute('disabled', 'disabled');
    }

    box.onclick = function() {
        console.log(box);
        if (box.checked) {
            submit.removeAttribute('disabled');
            submit.classList.add('active');
        }
        else {
            submit.classList.remove('active');
            submit.setAttribute('disabled', 'disabled');
        }
    };	
});