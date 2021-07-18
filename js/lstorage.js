const localstorageform = document.getElementById('form1')

localstorageform.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('usuário', convertData);

    alert("Obrigado " + nome + " por escolher a BookStore, um link será enviado ao e-mail cadastrado!");
})