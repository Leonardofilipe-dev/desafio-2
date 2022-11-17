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
let editarForm = document.querySelector("form");



async function getEvento() {

    try {
        const resposta = await fetch(URL_EVENT_ID + ID);
        if (!resposta.ok) {
            throw new Error("Não encontrou o link")
        }

        const dadosEvento = await resposta.json();

        inputNome.value = dadosEvento.name;
        inputBanner.value = dadosEvento.poster;
        inputAtracoes.value = dadosEvento.attractions;
        inputDescricao.value = dadosEvento.description;
        inputData.value = new Date(dadosEvento.scheduled).toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });
        inputLotacao.value = dadosEvento.number_tickets;
    } catch (error) {
        console.log(error);
    }

}

getEvento(ID);


editarForm.addEventListener("submit", (ev) => {

    ev.preventDefault();

    let eventoEditado = {};

    eventoEditado.name = inputNome.value;
    eventoEditado.poster = inputBanner.value;
    eventoEditado.attractions = inputAtracoes.value.split(",");
    eventoEditado.description = inputAtracoes.value;
    eventoEditado.scheduled = new Date(inputData.value);
    eventoEditado.number_tickets = inputLotacao.value;


    fetch(URL_EVENT_ID + ID, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventoEditado),
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        location.replace("/admin.html");


});

