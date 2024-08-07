export default function initScrollAnimate() {
    const windowHeight = window.innerHeight * 0.6;
    const sections = document.querySelectorAll('[data-js="scroll"]')

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= windowHeight) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo')
            }

        })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll)
}
