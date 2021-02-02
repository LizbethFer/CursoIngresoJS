/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
//Lizbeth Fernandez
function mostrar()
{
	var nombreDelEmpleado;
	nombreDelEmpleado = prompt("ingrese el nombre");
	//txtIdNombre.value = nombreDelEmpleado;
	document.getElementById("txtIdNombre").value = nombreDelEmpleado;
}

