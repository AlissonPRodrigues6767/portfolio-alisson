// Seleciona o formulário
const formulario = document.getElementById('formContato');

// Evento de envio do formulário
formulario.addEventListener('submit', function(event) {

    // Impede recarregar a página
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão vazios
    if(nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Verificação simples de e-mail
    if(!email.includes('@') || !email.includes('.')) {
        alert('Digite um e-mail válido!');
        return;
    }

    // Mensagem de sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpa o formulário
    formulario.reset();
});

// Alternância de tema claro e escuro
const temaBtn = document.getElementById('temaBtn');

// Evento do botão
temaBtn.addEventListener('click', function() {

    // Alterna a classe dark no body
    document.body.classList.toggle('dark');
});