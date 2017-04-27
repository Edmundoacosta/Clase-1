//console.log('hello'); // Mostrar en consola
//alert('Soy una alerta'); // Alerta


var a = 'Edmundo Acosta'; // String <-- Variable global, es decir puede ser utilizada en cualquier parte del codigo
var b = 20; // Number <-- Variable global, es decir puede ser utilizada en cualquier parte del codigo
var c = true; // Boolean <-- Variable global, es decir puede ser utilizada en cualquier parte del codigo
var alumnos = [] // Array vacio que puede ser utilizado en cualquier function 


function enviar(){
	var nombre = document.getElementById('user').value; // <-- Variable Local, es decir solo podra ser llamada en esta funcion
	var contra = document.getElementById('pass').value; // <-- Variable Local, es decir solo podra ser llamada en esta funcion
	console.log("usuario:" + nombre + "  contraseña:" + contra);
}


function insertar(){ // <-- Esta funcion se ejecuta cuando hacemos click en Añadir al Array
	document.getElementById('valor').value; // Si no capturamos el valor adentro de esta funcion captura el valor de cuando carga la pagina, y cuando carga el valor esta vacio siempre 
	alumnos.push(valor);
	console.log(alumnos);
	document.getElementById('valor').value = ""; // <-- Definimos que luego de que se añada a nuestro array el input donde insertamos el valor estara vacio, Esto es solo para facilitar la Usabilidad
}


// Objetos

var persona = {

	firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}

var carro = {
	marca: "Audi",
	velocidad : 200,
	dueño: "Bruno",
	peso: 80
}

// En este caso de los Objetos es más complicado insertar Datos, pero podemos acceder a estos datos mediante:


console.log(persona.firstName); // <-- Con esto accedemos a la variable persona adentro su firstName
console.log(persona.age); // <-- Accedemos al age adentro de persona
console.log(persona); // <-- Accedemos a todas las propiedades de persona
console.log(carro); // <-- Accedemos a todas las propiedades de carro










// Esto es parte del escope
function testing(){
	console.log(nombre); // <-- Esto no retornada nada en la consola porque la variable nombre esta dentro de la funcion enviar()
}

testing(); // <-- Aca llamamos a la funcion y en la consola deberia decirles que nombre its not defined
// La funcion enviar() se ejecuta cuando hacemos click en el boton, la funcion testing() la estoy ejecutando en la linea 63
