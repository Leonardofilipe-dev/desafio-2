const url_atual = window.location.search;
const parametros = new URLSearchParams(url_atual);
const id = parametros.get("id");
const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");


async function getEvento(id) {
    const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`);

    const dadosEvento = await resposta.json();

    inputNome.value = dadosEvento.name;
    inputBanner.value = dadosEvento.poster;
    inputAtracoes.value = dadosEvento.attractions;
    inputDescricao.value = dadosEvento.description;
    inputData.value = new Date(dadosEvento.scheduled).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });
    inputLotacao.value = dadosEvento.number_tickets;


    console.log(dadosEvento);
}




getEvento(id);