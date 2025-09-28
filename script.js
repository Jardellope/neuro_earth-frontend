
// Simulação de verificação de API
document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("status");
  setTimeout(() => {
    statusEl.textContent = "✅ Online";
    statusEl.style.color = "green";
  }, 1500);
});