document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const nome = document.getElementById("nome").value;

    const senha = document.getElementById("senha").value;

    if (!email || !senha || nome) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Conta criada com sucesso!");
});
