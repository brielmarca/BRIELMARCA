const form = document.getElementById("login-form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  feedback.textContent = "";

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) {
    feedback.textContent = "Preencha email e senha.";
    return;
  }

  try {
    const result = await postJson("/auth/login", { email, password });

    if (result.ok) {
      feedback.style.color = "#16a34a";
      feedback.textContent = "Login realizado com sucesso!";
    } else {
      feedback.style.color = "#dc2626";
      feedback.textContent = result.data.message || "Erro ao fazer login.";
    }
  } catch (error) {
    feedback.style.color = "#dc2626";
    feedback.textContent = "Não foi possível conectar à API.";
  }
});
