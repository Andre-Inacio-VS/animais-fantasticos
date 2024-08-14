import ScrollSuave from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initAnimais from './modules/animais-api.js'
import initBitcoin from './modules/fetch-bitcoin.js'
import initScrollAnimate from './modules/scroll-animate.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-js='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimais();
initBitcoin();
initScrollAnimate();