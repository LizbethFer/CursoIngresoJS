/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var banderaDelPriNeg;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var numeroMinPar;
	var numeroMaxNeg;
	//iniciar variables
	banderaDelPrimeroPar="es el primero";
	banderaDelPriNeg = "es el primer numero negativo";
	respuesta='si';
	/*numeroMaximo= -1000;
	numeroMinimo = 1000;  ||*/

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado % 2 == 0 || numeroIngresado < 0)
		{
			if(numeroIngresado % 2 == 0)
			{
				if(banderaDelPrimero == "es el primero")
			{
				numeroMinPar = numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMinPar)
				{
					numeroMinPar = numeroIngresado;
				}
				alert(numeroMinPar);

			}
			banderaDelPrimeroPar = " no es el primero";
			}
			if(numeroIngresado < 0)
			{
				if(banderaDelPriNeg == "es el primer numero negativo")
				{
					numeroMaxNeg = numeroIngresado;
				}
				else
				{
					if(numeroIngresado>numeroMaxNeg)
					{
						numeroMaxNeg = numeroIngresado;
					}
					alert(numeroMaxNeg);
				}
				banderaDelPriNeg = "no es el primero";
			}
			
		}
		/*if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primer numero";
		}
		else{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}*/
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN