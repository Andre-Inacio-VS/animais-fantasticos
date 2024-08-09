import initNumerosAnimate from './anima-numeros.js'

export default function initAnimais() {
    const dataNumero = document.querySelectorAll('[data-numero]')
    const url = 'https://api.api-ninjas.com/v1/animals?name'
    const configReq = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'YgYKjBdU2XZMwitEl7j3PA==dyKqMuXB0NfWvyPm'
        },
        contentType: 'application/json',
    }

    async function buscarAnimal(name, index) {
        try {
            const res = await fetch(`${url}=${name}`, configReq)
            if (res.ok) {
                const animaisJSON = await res.json()

                animaisJSON.forEach(animal => {
                    switch (animal.name) {
                        case "Eastern Gray Squirrel":
                            dataNumero[index].innerText = animal.characteristics.estimated_population_size.replace(' million +', '000000')
                            break;
                        case name:
                            dataNumero[index].innerText = animal.characteristics.estimated_population_size.replace(',', '')
                            break;
                        default:
                            break;
                    }
                })
                initNumerosAnimate();
            }
        } catch (error) {
            console.log(error)
        }
    }

    dataNumero.forEach((num, index) => {
        buscarAnimal(num.dataset.nome, index)
    })

}