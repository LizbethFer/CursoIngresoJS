/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */
function mostrar()
{
	var contadorProductos;
	var tipoProductos;
	var precioIngresado;
	var marcaIngresada;
	var fabricante;
	var cantUnidades;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var acumuladorCantAlcohol;
	var acumuladorCantBarbijo;
	var acumuladorCantJabon;

	contadorProductos=0;
	contadorAlcohol=0;


	while (contadorProductos<5) {
		tipoProductos = prompt("Ingrese un producto"+contadorProductos);
		while ( tipoProductos != "barbijo" && tipoProductos != "jabón" && tipoProductos != "alcohol" ) {
			tipoProductos = prompt("ERROR! Ingrese un dato valido");
		}
		precioIngresado = prompt("Ingrese un precio");
		while (isNaN(precioIngresado) == true || precioIngresado<100 ||precioIngresado>300 ) {
			precioIngresado = prompt("ERROR!Reingrese un numero valido");
		}
		marcaIngresada= prompt("ingrese una marca");
		while (isNaN(marcaIngresada) == false ) {
			marcaIngresada = prompt("ERROR!Reingrese una marca");
		}
		fabricante= prompt("ingrese un fabricante");
		while (isNaN(fabricante) == false ) {
			fabricante = prompt("ERROR!Reingrese un fabricante");
		}
		cantUnidades= prompt("ingrese un cantidad de unidades");
		while (isNaN(cantUnidades) == true || cantUnidades <1 ) {
			cantUnidades = prompt("ERROR!Reingrese un cantidad de Unidades correctas");
		}
		/*if(tipoProductos == "alcohol")
		{
			if(precioIngresadoAlcohol<precioIngresado || contadorAlcohol == 0)
			{
				precioIngresadoAlcohol = precioIngresado;
				cantUnidadesAlcohol = cantUnidades;
			}
			contadorAlcohol++;
		}*/
		switch (tipoProductos) {
			case "alcohol":
				if(precioIngresado<acumuladorCantAlcohol || contadorAlcohol == 0)
			{
				acumuladorCantAlcohol = precioIngresado;
				contadorAlcohol = cantUnidades;
			}
				//acumuladorCantAlcohol = acumuladorCantAlcohol + precioIngresado;
				contadorAlcohol++;
				break;
			case "barbijo":
				acumuladorCantBarbijo = acumuladorCantBarbijo + cantUnidades;
				contadorBarbijo++;
				break;
			case  "jabón":
				acumuladorCantJabon = acumuladorCantJabon + cantUnidades;
				contadorJabon++;
				break;
		
			default:
				break;
		}
		

		contadorProductos++;
	}
	console.log("El mas barato de los barbijos cuesta: " + acumuladorCantAlcohol);
	


}
