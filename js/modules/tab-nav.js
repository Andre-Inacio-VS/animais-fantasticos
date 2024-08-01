export default function initTabNav() {
    const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabcontent = document.querySelectorAll("[data-tab='content'] section");

    if (tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add('ativo');

        function activeTab(index) {
            const animacao = tabcontent[index].dataset.anime
            tabcontent.forEach((section) => {
                section.classList.remove('ativo', animacao);
            });
            tabcontent[index].classList.add('ativo', animacao);
        }

        tabmenu.forEach((item, index) => {
            item.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}