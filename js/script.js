document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let entryName = document.getElementById('name') 
    let nameError = document.getElementById('nameError') 
    let namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(entryName.value) || entryName.value.trim() === ''){
        nameError.textContent = 'Por favor ingresa un Nombre valido.'
        nameError.classList.add('error-message')
    }else{
        nameError.textContent = ''
        nameError.classList.remove('error-message')
    }

    let entryMail = document.getElementById('mail') 
    let emailError = document.getElementById('mailError') 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(entryMail.value)){
        emailError.textContent = 'Por favor Ingresa un Email valido'
        emailError.classList.add('error-message')
    }else{
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    let entryPassword = document.getElementById('asunto') 
    let passError = document.getElementById('asuntoError') 
    if(!namePattern.test(entryPassword.value)){
        passError.textContent = 'Por favor ingresa un Asunto valido.'
        passError.classList.add('error-message')
    }else{
        passError.textContent = ''
        passError.classList.remove('error-message')
    }
})