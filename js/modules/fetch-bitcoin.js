export default function initBitcoin() {

    fetch('https://blockchain.info/ticker')
        .then(res => res.json())
        .then(moedas => {
            const btcPreco = document.querySelector('.btc-preco')
            const real = moedas.BRL
            btcPreco.innerText = (1000 / real.sell).toFixed(4)
        })
        .catch(err => {
            console.log(Error(err))
        })

}