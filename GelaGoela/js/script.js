// Seleciona o formulário de contato
const form = document.querySelector('#contactForm');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();

  // Verifica se algum campo foi preenchido
  const isAnyFieldFilled = nome || email || mensagem;

  if (isAnyFieldFilled) {
    // Validação dos campos
    if (!nome || !email || !mensagem) {
      showFeedback('Por favor, preencha todos os campos.', false);
      return;
    }

    // Validação básica do e-mail
    if (!email.includes('@') || !email.includes('.')) {
      showFeedback('Por favor, insira um e-mail válido.', false);
      return;
    }

    // Exibe os valores preenchidos (simulação de envio)
    console.log(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

    // Limpa os campos do formulário
    form.reset();

    // Exibe feedback de sucesso
    showFeedback('Sua mensagem foi enviada com sucesso!', true);
  } else {
    // Se nenhum campo foi preenchido, redireciona para o WhatsApp
    window.open('https://wa.me/5511947163442', '_blank');
  }
});

// Função para exibir feedback visual
function showFeedback(message, isSuccess) {
  const feedbackDiv = document.createElement('div');
  feedbackDiv.textContent = message;
  feedbackDiv.className = isSuccess ? 'feedback success' : 'feedback error';
  form.prepend(feedbackDiv);

  // Remove o feedback após 3 segundos
  setTimeout(() => {
    feedbackDiv.remove();
  }, 3000);
}

// Seleciona os links de navegação
const navLinks = document.querySelectorAll('header nav a');

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');

    // Verifica se o link é interno (começa com #)
    if (href.startsWith('#')) {
      event.preventDefault(); // Evita o comportamento padrão do link

      // Obtém a seção correspondente
      const section = document.querySelector(href);

      // Rola suavemente até a seção, se ela existir
      if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -headerHeight); // Ajusta o offset para o header fixo
      }
    }
    // Links externos abrem normalmente
  });
});

// Modal de Contato
const openModalButtons = document.querySelectorAll('#openModal, #openModalFooter, #messageIcon');
const modal = document.getElementById('contactModal');
const closeModalButton = document.querySelector('.close');

// Abre o modal
openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Fecha o modal ao clicar no botão de fechar
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});