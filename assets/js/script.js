let elem_preloading = document.getElementById("preloading");
let elem_loading = document.getElementById("loading");
console.log(" Ok");

setTimeout(function() {
    elem_preloading.classList.remove("preloading");
    elem_loading.classList.remove("loading");
    }, 1280);

const openModalCadastroButton = document.querySelector("#open-modal-cadastro");
const closeModalCadastroButton = document.querySelector("#close-modal-cadastro");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalCadastroButton, closeModalCadastroButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());{
        modal.classList.toggle("hidden");
        fade.classList.toggle("hidden");
    };
})

const openModalEntrarButton = document.querySelector("#open-modal-entrar");
const closeModalEntrarButton = document.querySelector("#close-modal-entrar");
const modalEntrar = document.querySelector("#modalEntrar");
const fadeEntrar = document.querySelector("#fadeEntrar");

const toggleModalEntrar = () => {
    [modalEntrar, fadeEntrar].forEach((el) => el.classList.toggle("hide"));
}

[openModalEntrarButton, closeModalEntrarButton, fadeEntrar].forEach((el) => {
    el.addEventListener("click", () => toggleModalEntrar());{
        modalEntrar.classList.toggle("hidden")
        fadeEntrar.classList.toggle("hidden")
    };
})

