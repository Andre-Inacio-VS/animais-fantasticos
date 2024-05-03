/*
Exercicio 1)
// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll("img");
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const allWithImagem = document.querySelectorAll("img[src^='img/imagem']");
console.log(allWithImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const subtitle = document.querySelector(".animais-descricao h2");
console.log(subtitle);

// Selecione o último p do site
const allP = document.querySelectorAll("p");
const ultimoP = allP[allP.length - 1];
console.log(ultimoP);
*/

/*
Exercicio 2)
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

/*
Exercicio 3)

// Adicione a classe ativo a todos os itens do menu
const links = document.querySelectorAll(".menu a");
console.log(links);

links.forEach((link) => {
  link.classList.add("ativo");
  console.log(link);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
links.forEach((link, index) => {
  link.classList.remove("ativo");
  if (index === 0) {
    link.classList.add("ativo");
  }
  console.log(link);
});

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll("img");
console.log(images);

images.forEach((img) => {
  console.log(img, "<- tem alt? ", img.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com/");
*/

/*
Exercicio 4)

const animaisList = document.querySelectorAll(".animais-lista img");
const animais = document.querySelector(".animais-lista");
// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = animaisList[1].offsetTop;
console.log(
  "distancia da primeira imagem ao topo da pagina: " + firstImg + "px."
);

// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll("img");
let width = 0;
images.forEach((img) => (width += img.scrollWidth));
console.log("soma da largura de todas as imagens: " + width + "px.");

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll(".menu a");
links.forEach((link) => {
  if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(link + " possui a proporçao recomendada.");
  } else {
    console.log(link + " nao possui a proporçao recomendada.");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menuMobile = window.matchMedia("(max-width: 720px)").matches;
if (menuMobile) document.querySelector(".menu").classList.add("menu-mobile");

*/