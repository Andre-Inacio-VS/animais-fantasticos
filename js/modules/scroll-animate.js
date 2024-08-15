export default class ScrollAnimate {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowHeight = window.innerHeight * 0.6;

        this.checkDistance = this.checkDistance.bind(this)
    }

    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(offset - this.windowHeight),
            }
        })
    }

    checkDistance() {
        this.distance.forEach((item) => {
            if (window.scrollY > item.offset) {
                item.element.classList.add('ativo')
            } else if (item.element.classList.contains('ativo')) {
                item.element.classList.remove('ativo')
            }
        })
    }

    init() {
        if (this.sections.length) {
            setTimeout(() => {
                this.getDistance();
                this.checkDistance();
                window.addEventListener('scroll', this.checkDistance);
            }, 100);
        }
        return this
    }

    stop() {
        window.removeEventListener('scroll', this.checkDistance);
    }
}
