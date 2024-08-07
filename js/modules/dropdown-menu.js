import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {

    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(e) {
        e.preventDefault();

        this.classList.toggle('ativo')

        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        });
    }

    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => [
            menu.addEventListener(userEvent, handleClick)
        ])
    })

}