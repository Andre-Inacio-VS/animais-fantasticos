import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const events = ['click', 'touchstart']

    function openMenu(e) {
        menuButton.classList.add('ativo')
        menuList.classList.add('ativo')

        outsideClick(menuList, events, () => {
            menuButton.classList.remove('ativo')
            menuList.classList.remove('ativo')
        })
    }
    events.forEach(userEvent => menuButton.addEventListener(userEvent, openMenu))
}