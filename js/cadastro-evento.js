const URL_CADASTRO = "https://xp41-soundgarden-api.herokuapp.com/events/";


let inputNome = document.querySelector("#nome");
let inputAtracoes = document.querySelector("#atracoes");
let inputDescricao = document.querySelector("#descricao");
let inputData = document.querySelector("#data");
let inputLotacao = document.querySelector("#lotacao");
let cadastroForm = document.querySelector("form");






cadastroForm.addEventListener("submit", (ev) => {

    ev.preventDefault();

    let eventoCriado = {};

    eventoCriado.name = inputNome.value;
    eventoCriado.poster = "insira seu poster aqui"
    eventoCriado.attractions = inputAtracoes.value.split(",");
    eventoCriado.description = inputAtracoes.value;
    eventoCriado.scheduled = new Date(inputData.value);
    eventoCriado.number_tickets = inputLotacao.value;


    fetch(URL_CADASTRO , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventoCriado),
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        // let hrefAntes = location.href;

        // if (hrefAntes.includes("Leonardo")) {
        //     location.href = `${location.origin}/desafio-2/admin.html`
        // } else {
        //     location.href = `${location.origin}/admin.html`;
        // }

    location.replace("/admin.html");

});

