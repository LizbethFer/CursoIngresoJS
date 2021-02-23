function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	

	while (contador<5) {
		numeroIngresado = prompt("Ingrese numero "+contador);
		numeroIngresado= parseInt(numeroIngresado);
		acumulador = parseInt(acumulador);
		acumulador = numeroIngresado+acumulador;
		contador++;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN