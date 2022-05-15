

const createPassword = (password) => {
    const passwordContainer = document.createElement('div');
    passwordContainer.classList.add('output');
    passwordContainer.innerHTML = `
        <p>A senha gerada foi</p>
        <div class="result" id="password">
            ${password}
        </div>
        <span class="tooltip">👆 Click na senha para copiar 👆</span>
    `
    document.getElementById('passwordContainer').appendChild(passwordContainer);
}

const cleanScreen = () => {
    const passwordContainer = document.getElementById('passwordContainer');
    while (passwordContainer.firstChild) {
        passwordContainer.removeChild(passwordContainer.lastChild);
    }
}

const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&=+-*/';
    const numCharset = charset.length;
    const passwordMaxLenght = document.getElementById('slider').value;
    let password = '';
    for (let index = 0 ; index < passwordMaxLenght; index++) {
        password += charset.charAt(Math.floor(Math.random() * numCharset));
    }
    return password
}

let newPassword = '';
const renderPassword = () => {
    cleanScreen();
    generatePassword()
    const password = generatePassword();
    newPassword = password;
    createPassword(password);
}

const copyPassword = () => {
    alert('Senha Copiada!')
    navigator.clipboard.writeText(newPassword);
}

/* Actualiza o label de acordo a mudanca do slider */

slider = document.getElementById('slider');
passwordSize = document.getElementById('passwordSize');
passwordSize.innerHTML= slider.value;

slider.oninput = function () {
    passwordSize.innerHTML = this.value
}

/* ========================================================= */

document.getElementById('btnGeneratePassword').addEventListener('click', renderPassword);
document.getElementById('passwordContainer').addEventListener('click', copyPassword);