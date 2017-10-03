prompt ("Ingrese su nombre y elija 1 si lo quiere cifrar o 2 si lo quiere descifrar");

function preguntar(){
	do{
		var respuesta = prompt("Ingrese su nombre y elija 1) si lo quiere cifrar o 2) si lo quiere descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cifrar();
			} else if (respuesta == "2") {
				descifrar();
			} else {
				alert("No es correcto ");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function cifrar(){
    result  =  (x + 65) - n % 26
    return result = (result)string.charCodeAt ();
	alert(result);
}

function decifrar(){
	result = (x - n) % 26;
	return result = (result)string2.fromCharCode ();
	alert(result);
}

preguntar();
