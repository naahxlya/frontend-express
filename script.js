const API_URL = "https://seu-app.onrender.com/api";

async function buscarData() {
  try {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();

    document.getElementById("status").textContent = dados.date;
  } catch (erro) {
    document.getElementById("status").textContent = "Erro ao conectar com a API";
  }
}

buscarData();