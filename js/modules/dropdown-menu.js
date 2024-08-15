import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
    constructor(dropdown, events) {
        this.dropdownMenus = document.querySelectorAll(dropdown);
        this.activeClass = 'ativo'
        if (events === undefined) this.events = ['touchstart', 'click']
        else this.events = events
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    }

    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget

        element.classList.toggle(this.activeClass)

        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass)
        });
    }

    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => [
                menu.addEventListener(userEvent, this.activeDropdownMenu)
            ])
        })
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this
    }
}