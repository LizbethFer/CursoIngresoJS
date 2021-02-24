/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumamPositivos;
	var cantDePositivos;
	var cantDeNegativos;
	var cantDeCeros;
	var cantPares;
	var PromedioNegativos;
	var PromedioPositivos;
	var DiferenciaPositivos;
	var MaxNegativo;
	var MinimoPar;


	respuesta="si";
	sumaNegativos=0;
	sumamPositivos=0;
	cantDeNegativos=0;
	cantDePositivos=0;
	cantDeCeros=0;
	cantPares = 0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))//isNaN = pregunta si no es un numero
		{
		numeroIngresado=prompt("ERROR! Reingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado<0)
		{
			if(numeroIngresado>MaxNegativo || cantDeNegativos==0 )
			{
				MaxNegativo = numeroIngresado;
			}
			sumaNegativos = numeroIngresado + sumaNegativos;
			cantDeNegativos++;
			
		}
		else
		{
			if(numeroIngresado>0)
			{
			sumamPositivos = numeroIngresado + sumamPositivos;
			cantDePositivos++;
			}
			else
			{
				cantDeCeros++;
			}
			
		}
		if(numeroIngresado%2 == 0)
		{
			if(numeroIngresado<MinimoPar || cantPares==0 )
			{
				MinimoPar = numeroIngresado;
			}
			
			cantPares++;
		}
		respuesta=prompt("desea continuar? si/no");
	}//fin del while
	
	DiferenciaPositivos = sumamPositivos-sumaNegativos;

	console.log("La suma de negativos es :"+sumaNegativos);
	console.log("La suma de positivos es :"+sumamPositivos);
	console.log("La cantidad de positivos es :"+cantDePositivos);
	console.log("La cantidad de negativos es :"+cantDeNegativos);
	console.log("La cantidad de negativos es :"+cantDeNegativos);
	console.log("La cantidad de ceros es :"+cantDeCeros);
	console.log("La cantidad de pares es :"+cantPares);
	if(cantDePositivos!=0)
		{
			PromedioPositivos = sumamPositivos/cantDePositivos;
			console.log("El promedio de positivos es :"+PromedioPositivos);

		}
		else
		{
			console.log("El promedio de positivos : No hubo ingreso de numeros positivos");

		}
		if(cantDePositivos!=0)
		{
			PromedioNegativos = sumaNegativos/cantDeNegativos;
			console.log("El promedio de negativos es :"+PromedioNegativos);
		}
		else
		{
			console.log("El promedio de negativos : No hubo ingreso de numeros negativos");

		}
	console.log("La diferencia de positivos y negativos es :"+DiferenciaPositivos);
	console.log("El numero Maximo de los negativos es :"+MaxNegativo);
	console.log("El numero Minimo par es :"+MinimoPar);







}//FIN DE LA FUNCIÓN
