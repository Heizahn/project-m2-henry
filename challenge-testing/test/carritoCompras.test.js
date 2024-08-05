const CarritoCompra = require("../index")

describe("test para la clase 'carrito compra'",()=>{
	let instancia;

	beforeAll(() => {
		instancia = new CarritoCompra(); // Crear la instancia antes de ejecutar las pruebas
	});

	afterAll(() => {
		// Limpiar o finalizar la instancia después de ejecutar todas las pruebas
		instancia = null;
	  });
	
	it("La clase debe estar creada",()=>{
		expect(instancia instanceof CarritoCompra).toBe(true)
	})

	it("Debe tener los métodos (agregarProducto, calcularTotal, aplicarDescuento)",()=>{
		expect(instancia).toHaveProperty('agregarProducto')
		expect(instancia).toHaveProperty('calcularTotal')
		expect(instancia).toHaveProperty('aplicarDescuento')
	})

	it("El método 'agregarProducto' debe agregar un producto",()=>{
		let beginning = instancia.repositories.length

		instancia.agregarProducto({name: "Producto A", price: 10, quantity: 2})
		instancia.agregarProducto({name: "Producto B", price: 7, quantity: 5})
		instancia.agregarProducto({name: "Producto C", price: 12, quantity: 1})

		expect(beginning < instancia.repositories.length).toBe(true)
	})

	it("El método 'calcularTotal' debe funcionar correctamente calculando el monto total a cancelar de los productos",()=>{
		expect(instancia.calcularTotal()).toBe(67)
	})

	it("El método 'aplicarDescuento' debe aplicar el descuento pasando un porcentaje",()=>{
		expect(instancia.aplicarDescuento(10)).toBe(60.3)
	})
})