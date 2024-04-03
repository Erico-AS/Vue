new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		
		cor: '',
		estilos: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'escolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temp = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temp)
			}, 500)
		},

		setPerigo(event) {
			if(event.target.value == "true") {
				this.perigo = true
			} else {
				this.perigo = false
			}
		}
	}
})
