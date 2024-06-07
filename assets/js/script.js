let elem_preloading = document.getElementById("preloading");
let elem_loading = document.getElementById("loading");
console.log(" Ok");

setTimeout(function() {
    elem_preloading.classList.remove("preloading");
    elem_loading.classList.remove("loading");
    }, 1280);

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());{
        modal.classList.toggle("hidden");
        fade.classList.toggle("hidden");
    };
});