export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

    console.log(diasSemana)
    console.log(horarioSemana)

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay()
    const horaAgora = dataAgora.getHours()

    console.log(diaAgora)
    console.log(horaAgora)

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
    const horarioAberto = horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1]

    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }

    console.log(funcionamento)
}