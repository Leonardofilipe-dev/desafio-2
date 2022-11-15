const section = document.querySelector("#containerEventos");

async function getEventos() {

    try {
        const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events
    `);

    const eventos = await response.json();

    eventos.forEach(evento => {
        const cardEvento = `
        <article class="evento card p-5 m-2 ">
            <h2>${evento.name}</h2>
            <h4>${evento.attractions}</h4>
            <p >${evento.description}</p>
            <a  href="#" class="btn btn-primary">reservar ingresso</a>
        </article>`;

        section.innerHTML += cardEvento;
    })
    } catch(error) {
        console.log("Erro ao encontrar link");
    }
    

}

getEventos();