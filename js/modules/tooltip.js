export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]')

    function verTooltip(e) {
        const tooltipBox = criarTooltip(this)

        if (this.parentElement.classList.contains('ativo')) {
            moveTooltip.tooltipBox = tooltipBox
            moveTooltip.element = this
            this.addEventListener('mousemove', moveTooltip)

            hiddeTootlip.tooltipBox = tooltipBox
            hiddeTootlip.element = this
            this.addEventListener('mouseleave', hiddeTootlip)
        }
    }

    function criarTooltip(element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }

    const hiddeTootlip = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', hiddeTootlip)
        },
    }

    const moveTooltip = {
        tooltipBox: '',
        element: '',
        handleEvent(e) {
            this.tooltipBox.style.top = e.pageY + 20 + 'px'
            if (e.pageX <= this.element.offsetWidth * .5) {
                this.tooltipBox.style.left = e.pageX + 20 + 'px'
                this.tooltipBox.style.right = 'auto'
            } else {
                this.tooltipBox.style.left = 'auto'
                this.tooltipBox.style.right = (window.innerWidth - e.pageX + 20) + 'px'
            }
            this.element.removeEventListener('mouseleave', moveTooltip)
        },
    }

    tooltips.forEach(item => {
        item.addEventListener('mouseover', verTooltip)
    });

}