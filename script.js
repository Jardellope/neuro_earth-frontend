// Navegação suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animação do botão "Fale Conosco"
const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.1)";
  btn.style.transition = "0.3s";
});

btn.addEventListener("mouseout", () => {
  btn.style.transform = "scale(1)";
});
