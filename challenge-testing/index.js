class CarritoCompra {
	constructor(){
		this.repositories = []
	}

	agregarProducto({name, price, quantity}){
		this.repositories.push({name, price, quantity})
	}

	calcularTotal(){
		let total = 0

		this.repositories.forEach(item => {
			total += item.price * item.quantity
		})

		return total
	}

	aplicarDescuento(porcentaje){
		let total = this.calcularTotal()
		let descuento = (total * porcentaje) / 100

		return total - descuento
	}
}

module.exports = CarritoCompra