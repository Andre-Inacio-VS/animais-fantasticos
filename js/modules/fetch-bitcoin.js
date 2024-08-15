export default function fetchBitcoin(url, target) {

    fetch(url)
        .then(res => res.json())
        .then(moedas => {
            const btcPreco = document.querySelector(target)
            const real = moedas.BRL
            btcPreco.innerText = (1000 / real.sell).toFixed(4)
        })
        .catch(err => {
            console.log(Error(err))
        })

}