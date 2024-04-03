new Vue({
    el: '#nomeIdade',
    data: {
        titulo: 'Érico / 18 anos'
    }
})

new Vue({
    el: '#mult',
    data: {
        mensagem: ''
    },
    methods: {
        multiplicar(event) {
            let idade = Number(event.target.value) * 3;
            this.mensagem = idade.toString();
        }
    }
})

new Vue({
    el: '#randomico',
    data: {
        mensagem: Math.floor(Math.random() * 2).toString()
    }
})

new Vue({
    el: 'img',
    data: {
        link: 'https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg'
    }
})

new Vue({
    el: '#nome',
    data: {
        mensagem: 'Érico'
    }
})