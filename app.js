
const createPasswordContainer = (password) => {
    const passwordContainer = document.createElement('div');
    passwordContainer.classList.add('output-container');
    passwordContainer.innerHTML = `
        <p>A senha gerada foi</p>
        <div class="password" id="password">
            ${password}
        </div>
        <span class="tooltip">👆 Click acima para copiar a senha 👆</span>
    `
    document.getElementById('outputContainer').appendChild(passwordContainer);
}

const cleanScreen = () => {
    const passwordContainer = document.getElementById('outputContainer');
    while (passwordContainer.firstChild) {
        passwordContainer.removeChild(passwordContainer.lastChild);
    }
}

const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&=+-*/';
    const numCharset = charset.length;
    const passwordMaxLenght = document.getElementById('slider').value;
    let password = '';
    for (let index = 0; index < passwordMaxLenght; index++) {
        password += charset.charAt(Math.floor(Math.random() * numCharset));
    }
    return password;
}

let newPassword = '';
const renderPassword = () => {
    cleanScreen();
    const password = generatePassword();
    createPasswordContainer(password);
    newPassword = password;
}

const copyPassword = () => {
    navigator.clipboard.writeText(newPassword).then(() =>{
        alert('Senha Copiada!');
    }).catch( err => {
        console.log('Ocorreu um erro: '+err);
    })   
}

/* Actualiza o label de acordo a mudanca do slider */

slider = document.getElementById('slider');
labelPasswordSize = document.getElementById('labelPasswordSize');
labelPasswordSize.innerHTML = slider.value;

slider.oninput = function () {
    labelPasswordSize.innerHTML = this.value
}

/* ========================================================= */

document.getElementById('btnGeneratePassword').addEventListener('click', renderPassword);
document.getElementById('outputContainer').addEventListener('click', copyPassword);