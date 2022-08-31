const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
});


// Typewriter effect
const TypeWriter = function (txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span><span class = "blinker"></span>`;

    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {

        typeSpeed = this.wait;
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {

        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 200

    }

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.typewriter');
    const words = JSON.parse(txtElement.getAttribute('data-text'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}


// /////////////////////////// LOGIN AND SIGN UP PAGE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const signupSubmit = document.querySelector("#signup_submit");

function disableSubmit() {
    signupSubmit.disabled = true;
}

function activateButton(element) {

    if (element.checked) {
        signupSubmit.disabled = false;
    }
    else {
        signupSubmit.disabled = true;
    }

}

const sign_in_btn = document.querySelector("#sign_in_btn");
const sign_up_btn = document.querySelector("#sign_up_btn");
const header_signup = document.querySelector('#header_signup')
const sContainer = document.querySelector(".s_container");

sign_up_btn.addEventListener('click', function () {
    sContainer.classList.add("sign_up_mode");
});

sign_in_btn.addEventListener('click', function () {
    sContainer.classList.remove("sign_up_mode");
});