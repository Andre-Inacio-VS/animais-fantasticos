export default class Modal {
    constructor(abrir, fechar, container) {
        this.btnAbrir = document.querySelector(abrir);
        this.btnFechar = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);
        this.classActive = "ativo";

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.fecharModalContainer = this.fecharModalContainer.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle(this.classActive);
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    fecharModalContainer(event) {
        if (event.target === this.containerModal)
            this.toggleModal(event);
    }

    addModalEvents() {
        this.btnAbrir.addEventListener("click", this.eventToggleModal);
        this.btnFechar.addEventListener("click", this.eventToggleModal);
        this.containerModal.addEventListener("click", this.fecharModalContainer);
    }

    init() {
        if (this.btnAbrir && this.btnFechar && this.containerModal)
            this.addModalEvents();
        return this;
    }
}
