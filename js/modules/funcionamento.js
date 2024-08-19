export default class Funcionamento {
    constructor(funcionamento, activeAberto) {
        this.funcionamento = document.querySelector(funcionamento)
        this.activeAberto = activeAberto
    }

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay()
        this.horaAgora = this.dataAgora.getUTCHours() - 3
    }

    estaAberto() {
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
        this.horarioAberto = this.horaAgora >= this.horarioSemana[0]
            && this.horaAgora < this.horarioSemana[1]

        return this.semanaAberto && this.horarioAberto
    }

    ativaAberto() {
        if (this.estaAberto()) {
            this.funcionamento.classList.add(this.activeAberto)
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento()
            this.dadosAgora()
            this.ativaAberto()
        }
        return this
    }
}