const API_URL = "https://projeto-express-qehn.onrender.com/";

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