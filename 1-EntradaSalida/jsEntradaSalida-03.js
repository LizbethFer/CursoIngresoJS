/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreDelAlumno;
	//nombreDelAlumno =txtIdNombre.value;
	nombreDelAlumno= document.getElementById('txtIdNombre').value;
	var edadDelAlumno=prompt("Escribe tu edad");
	alert("Usted se llama "+nombreDelAlumno+" y su edad es "+edadDelAlumno );
	


}


