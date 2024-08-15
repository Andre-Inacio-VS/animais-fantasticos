export default class ScrollAnimate {
    constructor(sections) {
        this.windowHeight = window.innerHeight * 0.6;
        this.sections = document.querySelectorAll(sections);

        this.animaScroll = this.animaScroll.bind(this)
    }

    animaScroll() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= this.windowHeight) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo')
            }

        })
    }

    init() {
        this.animaScroll()
        window.addEventListener('scroll', this.animaScroll)
    }
}
