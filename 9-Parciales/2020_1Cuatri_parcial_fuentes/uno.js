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
	var marcaAlchol;
	var fabricanteAlcohol;
	var sumaDeUnidadesAlcohol;
	var sumaDeUnidadesBarbijo;
	var sumaDeUnidadesJabon;
	var promedioCompra;

	contadorProductos=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;

	


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
		while (isNaN(cantUnidades) == true || cantUnidades <1 ||cantUnidades>1000) {
			cantUnidades = prompt("ERROR!Reingrese un cantidad de Unidades correctas");
		}

		sumaDeUnidadesBarbijo=parseInt(sumaDeUnidadesBarbijo);
		sumaDeUnidadesJabon=parseInt(sumaDeUnidadesJabon);
		sumaDeUnidadesAlcohol=parseInt(sumaDeUnidadesAlcohol);

		cantUnidades=parseInt(cantUnidades);
	
		switch (tipoProductos) {
			case "alcohol":
				if(precioIngresado<acumuladorCantAlcohol || contadorAlcohol == 0)
			{
				acumuladorCantAlcohol = precioIngresado;
				sumaDeUnidadesAlcohol=cantUnidades;
				marcaAlchol=marcaIngresada;
				fabricanteAlcohol=fabricante;
			}
				sumaDeUnidadesAlcohol = sumaDeUnidadesAlcohol+ cantUnidades;
				contadorAlcohol++;
				break;
			case "barbijo":
				if (contadorBarbijo == 0) 
				{
					sumaDeUnidadesBarbijo=cantUnidades;
				}
				sumaDeUnidadesBarbijo = sumaDeUnidadesBarbijo + cantUnidades;
				contadorBarbijo++;
				break;
			case  "jabón":
				if (contadorJabon == 0) 
				{
					sumaDeUnidadesJabon=cantUnidades;
				}
				sumaDeUnidadesJabon = sumaDeUnidadesJabon + cantUnidades;
				contadorJabon++;
				break;
		
			default:
				break;
		}
		

		contadorProductos++;
	}
	console.log("El mas barato de los barbijos cuesta: " + acumuladorCantAlcohol + "la marca es "+marcaAlchol+" y lo fabrica "+fabricanteAlcohol);

	if (sumaDeUnidadesAlcohol>sumaDeUnidadesBarbijo && sumaDeUnidadesAlcohol>sumaDeUnidadesJabon) {
		MaxCantidad=sumaDeUnidadesAlcohol;
		promedioCompra = MaxCantidad/contadorAlcohol;
	}
	else
	{
		if (sumaDeUnidadesBarbijo>contadorAlcohol && sumaDeUnidadesBarbijo>sumaDeUnidadesJabon) 
		{
			MaxCantidad=sumaDeUnidadesBarbijo;
			promedioCompra = MaxCantidad/contadorBarbijo;

		}
		else
		{
			MaxCantidad=sumaDeUnidadesJabon;
			promedioCompra = MaxCantidad/contadorJabon;

		}
	}
	console.log("El promedio del tipo con mas unidades es : "+promedioCompra);
	console.log("la suma de unidades de jabon es:"+sumaDeUnidadesJabon);
	


}
