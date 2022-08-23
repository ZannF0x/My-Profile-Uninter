
//Modals
const modalKnowMe = document.querySelector("#modal_know_me");
const modalFormation = document.querySelector("#modal_formation");
const modalContact = document.querySelector("#modal_contact");
const modalPortfolio = document.querySelector("#modal_portfolio");

//Botões que abrem os Modals
const openModalKnowMe = document.querySelector("#option_know_me");
const openModalFormation = document.querySelector("#option_formation");
const openModalContact = document.querySelector("#option_contact");
const openModalPortfolio = document.querySelector("#option_portfolio");

//Botões que fecham os Modals
const closeModalKnowMe = document.querySelector("#btn_close_modal_know_me");
const closeModalFormation = document.querySelector("#btn_close_modal_formation");
const closeModalContact = document.querySelector("#btn_close_modal_contact");
const closeModalPortfolio = document.querySelector("#btn_close_modal_contact");

// Botões para abrir uma página html de acordo com a sessão escolhida
const openPageContact = document.querySelector("#btn_open_page_contact");
const openPageFormations = document.querySelector("#btn_open_page_formations");
const openPageKnowMe = document.querySelector("#btn_open_page_know_me");
const openPagePortfolio = document.querySelector("#btn_open_page_portfolio");

//fundo escuro quando algum modal for selecionado
const fade = document.querySelector("#modal_fade");

//Modal Know Me - função que muda o estado de visibilidade (opacidade)
const toggleModalKnowMe = () => {
    modalKnowMe.classList.toggle("hide");
    fade.classList.toggle("hide");
};

//Modal Formation - função que muda o estado de visibilidade (opacidade)
const toggleModalFormation = () => {
    modalFormation.classList.toggle("hide");
    fade.classList.toggle("hide");
};

//Modal Formation - função que muda o estado de visibilidade (opacidade)
const toggleModalContact = () => {
    modalContact.classList.toggle("hide");
    fade.classList.toggle("hide");
};

//Modal Portfolio - função que muda o estado de visibilidade (opacidade)
const toggleModalPortfolio = () => {
    modalPortfolio.classList.toggle("hide");
    fade.classList.toggle("hide");
};

//Listando os itens e escutando/verificando os eventos de clique
[
    openModalKnowMe,
    openModalFormation,
    openModalContact,
    openModalPortfolio,
    closeModalKnowMe,
    closeModalFormation,
    closeModalContact,
    closeModalPortfolio,
    openPageContact,
    openPageFormations,
    openPageKnowMe,
    openPagePortfolio,
    fade
].forEach((item) => {
    if (item.id === openModalKnowMe.id || item.id === closeModalKnowMe.id || item.id === openPageKnowMe.id) { 
        item.addEventListener("click", () => toggleModalKnowMe());
    }
    if (item.id === openModalFormation.id || item.id === closeModalFormation.id || item.id === openPageFormations.id) { 
        item.addEventListener("click", () => toggleModalFormation());
    }
    if (item.id === openModalContact.id || item.id === closeModalContact.id || item.id === openPageContact.id) { 
        item.addEventListener("click", () => toggleModalContact());
    }
    if (item.id === openModalPortfolio.id || item.id === closeModalPortfolio.id || item.id === openPagePortfolio.id) { 
        item.addEventListener("click", () => toggleModalPortfolio());
    }
});
