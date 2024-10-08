import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target) {
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    function preencherAnimais(animal) {
        const numerosGrid = document.querySelector(target);
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    function animaAnimaisN() {
        const animaNumeros = new AnimaNumeros('[data-numero]', 'ativo', '.numeros');
        animaNumeros.init();
    }

    async function criarAnimais() {
        try {
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();

            animaisJSON.forEach(animal => preencherAnimais(animal));

            animaAnimaisN();
        } catch (erro) {
            console.log(Error(erro));
        }
    }

    return criarAnimais();
}
