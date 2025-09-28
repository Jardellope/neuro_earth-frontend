// Conectar rota / (status)
fetch("https://euro-earth-backend.onrender.com/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").innerText = data.status;
  });

// Conectar rota /visao
fetch("https://euro-earth-backend.onrender.com/visao")
  .then(res => res.json())
  .then(data => {
    document.getElementById("missao").innerText = data.missao;
    document.getElementById("objetivo").innerText = data.objetivo;
  });

// Conectar rota /clima
fetch("https://euro-earth-backend.onrender.com/clima")
  .then(res => res.json())
  .then(data => {
    document.getElementById("clima").innerText =
      `${data.alerta} | Temp: ${data.dados.temperatura} | Umidade: ${data.dados.umidade}`;
  });
