const URL_EVENT_ID = "https://xp41-soundgarden-api.herokuapp.com/events/";
const URL_ATUAL = window.location.search;
let parametros = new URLSearchParams(URL_ATUAL);
const ID = parametros.get("id");
let inputNome = document.querySelector("#nome");
let inputBanner = document.querySelector("#banner");
let inputAtracoes = document.querySelector("#atracoes");
let inputDescricao = document.querySelector("#descricao");
let inputData = document.querySelector("#data");
let inputLotacao = document.querySelector("#lotacao");


async function getEvento(ID) {

    try {
        const resposta = await fetch(URL_EVENT_ID + ID);

        const dadosEvento = await resposta.json();

        inputNome.value = dadosEvento.name;
        inputBanner.value = dadosEvento.poster;
        inputAtracoes.value = dadosEvento.attractions;
        inputDescricao.value = dadosEvento.description;
        inputData.value = new Date(dadosEvento.scheduled).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });
        inputLotacao.value = dadosEvento.number_tickets;
    } catch(error) {
        console.log("Erro ao encontrar link");
    }

}

btnExcluir.addEventListener('click', function excluiEvent(URL_EVENT_ID, ID){
    let requestOptions = {
        method: "DELETE",
        redirect: "follow",
    };

    let endpoint = URL_EVENT_ID + ID;
    fetch(endpoint, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    });






getEvento(ID);