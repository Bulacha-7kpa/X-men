const personagens = document.querySelectorAll(".personagem");


personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

        if (window.innerWidth <= 450) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");

        alterandoImagemDoPersonagemSelecionado(personagem);

        alterandoNomeDoPersonagemSelecionado(personagem);

        alterandoDescricaoDoPersonagemSelecionado(personagem); 
    })
})

function alterandoImagemDoPersonagemSelecionado(personagem) {
    const imgPersonagemGrande = document.querySelector(".personagem-grande");

    const idPersonagem = personagem.attributes.id.value;
    imgPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;
}

function alterandoNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagemSelect = document.querySelector("#nome-personagem");

    nomePersonagemSelect.innerHTML = personagem.getAttribute("data-name");
}

function alterandoDescricaoDoPersonagemSelecionado(personagem) {
    const descricaoPersonagemSelect = document.getElementById("descricao-personagem");

    descricaoPersonagemSelect.innerHTML = personagem.getAttribute("data-description");
}

function removerSelecaoDoPersonagem() {
    const personagemSelect = document.querySelector(".selecionado");
    personagemSelect.classList.remove("selecionado");
}
