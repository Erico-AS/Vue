new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valorEnter: ''
    },
    methods: {
        q1() {
            alert('exibiu')
        },

        q2(event) {
            this.valor = event.target.value
        },

        q3(event) {
            this.valorEnter = event.target.value
        }
    }
})