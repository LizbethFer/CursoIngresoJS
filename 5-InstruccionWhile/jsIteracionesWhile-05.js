/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	sexoIngresado= sexoIngresado.toLowerCase();//para que lo combierta en minuscula
	
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN