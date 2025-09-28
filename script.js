// Conectar ao backend no Render
fetch("https://euro-earth-backend.onrender.com/visao")
  .then(response => response.json())
  .then(data => {
    document.getElementById("missao").innerText = data.missao;
    document.getElementById("objetivo").innerText = data.objetivo;
  })
  .catch(err => console.error("Erro ao carregar API:", err));
