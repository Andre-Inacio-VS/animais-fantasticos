export default class TabNav {
    constructor(menu, content) {
        this.tabmenu = document.querySelectorAll(menu);
        this.tabcontent = document.querySelectorAll(content);
        this.activeClass = 'ativo'
    }

    activeTab(index) {
        const animacao = this.tabcontent[index].dataset.anime
        this.tabcontent.forEach((section) => {
            section.classList.remove(this.activeClass, animacao);
        });
        this.tabcontent[index].classList.add(this.activeClass, animacao);
    }

    addTabNavEvent() {
        this.tabmenu.forEach((item, index) => {
            item.addEventListener('click', () => this.activeTab(index))
        });
    }

    init() {
        if (this.tabmenu.length && this.tabcontent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
    }
}