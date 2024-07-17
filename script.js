const activeClass = "ativo";

function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(activeClass);

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabcontent[index].classList.add(activeClass);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScroll();

function initScrollAnimate() {
  const windowHeight = window.innerHeight * 0.6;
  const sections = document.querySelectorAll('.js-scroll')

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= windowHeight)
        section.classList.add('ativo')
      else
        section.classList.remove('ativo')

    })
  }

  animaScroll();
  window.addEventListener('scroll', animaScroll)
}

initScrollAnimate();