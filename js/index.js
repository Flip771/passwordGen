const slider = document.querySelector('.sliderDiv input');
const output = document.getElementById("len");
const button = document.querySelector('.buttonDiv');
output.innerHTML = slider.value;
output.style.color = "yellow";

slider.oninput = function() {
    output.innerHTML = this.value;
    if (this.value <= 9) {
        output.style.color = "yellow";
    } else if (this.value <= 22 && this.value > 9) {
        output.style.color = "lightblue";
    } else if (this.value <= 32 && this.value > 22) {
        output.style.color = "red";
    }
}


let generator = () => {

    const length = document.querySelector('#myRange').value;
    const wantUpper = document.querySelectorAll('.innerEachset')[1].children[0].checked;
    const wantLower = document.querySelectorAll('.innerEachset')[3].children[0].checked;
    const wantNumber = document.querySelectorAll('.innerEachset')[5].children[0].checked;
    const wantSymbol = document.querySelectorAll('.innerEachset')[7].children[0].checked;
    const heading = document.querySelector('.headingDiv').children[0];
    let result = document.querySelector('.generateDiv').children[0];

    const symbols = "!@#$%^&*()";
    const nums = "0123456789";
    const lowAlphs = "abcdefghijklmnopqrstuvwxyz";
    const uppAlphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let char = "";
    let password = "";

    if (!wantUpper && !wantLower && !wantNumber && !wantSymbol) {
        result.textContent = "Please include something bruh";
        return;
    }



    if (wantUpper) {
        char += uppAlphs;
    }
    if (wantLower) {
        char += lowAlphs;
    }
    if (wantNumber) {
        char += nums;
    }
    if (wantSymbol) {
        char += symbols;
    }

    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber, randomNumber + 1);
    }

    result.textContent = password;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(password);
    heading.textContent = "COPIED !!"






}







button.addEventListener('click', generator);