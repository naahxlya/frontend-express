const API_URL = "https://projeto-express-qehn.onrender.com/api";

async function buscarData() {
  try {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();

    // converte para horário do usuário (seu computador)
    const dataLocal = new Date(dados.date).toLocaleString('pt-BR');

    document.getElementById("status").textContent = dataLocal;
  } catch (erro) {
    document.getElementById("status").textContent = "Erro ao conectar com a API";
  }
}

buscarData();