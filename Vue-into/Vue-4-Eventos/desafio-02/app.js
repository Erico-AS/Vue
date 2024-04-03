new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado: function() {
            return this.value == 37 ? 
            'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
    //propriedade monitorada
    resultado: setTimeout(() => {
            this.valor = 0
        }, 5000)
    }
});