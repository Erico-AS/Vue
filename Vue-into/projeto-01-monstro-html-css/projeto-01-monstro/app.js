new Vue({
    el: '#app',
    data: {
        ganhou: null,
        comecou: false,
        widthM: 100,
        widthJ: 100,
        aJogador: 0,
        aMonstro: 0,
        jogadas: []
    },
    methods: {
        gerarRandom: function() {
            min = Math.ceil(1);
            max = Math.floor(20);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        ataque: function(e) {
            console.log(e)
            let aJogador =  e == 'especial' ? this.gerarRandom() + 6 : this.gerarRandom()
            let aMonstro = this.gerarRandom() + 6

            this.widthM = (this.widthM - aJogador) == 0 ? 0 : this.widthM - aJogador
            this.widthJ = (this.widthJ - aMonstro) == 0 ? 0 :  this.widthJ - aMonstro
            
            if(this.widthJ >= 0 && this.widthM >= 0) {

                this.jogadas.push({'player' : 'jogador',
                    'ataque' : aJogador,
                    'class' : 'player'
                })

                this.jogadas.push({'player' : 'monstro',
                'ataque' : aMonstro,
                'class' : 'monster'
            })
    
                console.log(this.widthJ, this.widthM)
            } else {
                if (this.widthJ <= 0) {
                    this.widthJ = 0
                    this.ganhou = false 
                } else {
                    this.widthM = 0
                    this.ganhou = true
                }
            }

        },
        curar: function() {
            let cJogador = this.gerarRandom() + 4
            let aMonstro = this.gerarRandom()
            
            this.widthJ = (this.widthJ + cJogador - aMonstro) > 100 ? 100 : this.widthJ + cJogador - aMonstro
            console.log(this.widthJ)
        }
    }
   
})