// Função auxiliar para mostrar modal
function showModal(modalElem) {
  modalElem.classList.remove("hidden");
  modalElem.classList.add("show");
}

// Esconder modal
function hideModal(modalElem) {
  modalElem.classList.remove("show");
  modalElem.classList.add("hidden");
}

// Ao clicar no botão “Entrar”
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
if (loginBtn && loginModal) {
  loginBtn.addEventListener("click", () => {
    showModal(loginModal);
  });
}

// Botões de fechar modais
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) hideModal(modal);
  });
});

// Ao confirmar login (exemplo simples)
const confirmLoginBtn = document.getElementById("confirmLoginBtn");
confirmLoginBtn?.addEventListener("click", () => {
  const nameInput = document.getElementById("loginName").value;
  if (nameInput && nameInput.trim() !== "") {
    // Exemplo: mostrar usuário logado
    document.getElementById("userName").textContent = nameInput;
    // Esconder modal login
    hideModal(loginModal);
    // Mostrar área de usuário
    document.getElementById("userInfo").classList.remove("hidden");
    // Esconder botão entrar
    loginBtn.classList.add("hidden");
    showToast("Bem-vindo, " + nameInput + "!");
  } else {
    showToast("Digite seu nome primeiro.");
  }
});

// Função de Toast
function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMessage = toast.querySelector(".toast-message");
  toastMessage.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Mostrar modal novo post
const newPostBtn = document.getElementById("newPostBtn");
const newPostModal = document.getElementById("newPostModal");
newPostBtn?.addEventListener("click", () => {
  showModal(newPostModal);
});

// Enviar novo post
const newPostForm = document.getElementById("newPostForm");
newPostForm?.addEventListener("submit", event => {
  event.preventDefault();
  const category = document.getElementById("postCategory").value;
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;
  if (!category || !title || !content) {
    showToast("Preencha todos os campos do post.");
    return;
  }

  const postsContainer = document.getElementById("postsContainer");
  const postElem = document.createElement("div");
  postElem.classList.add("post");
  postElem.innerHTML = `
    <h4>${title}</h4>
    <small>${category}</small>
    <p>${content}</p>
  `;
  postsContainer.prepend(postElem);

  hideModal(newPostModal);
  newPostForm.reset();
  showToast("Post publicado com sucesso!");
});

// Outras lógicas (quiz, perfil, respostas) podem ser criadas da mesma forma
