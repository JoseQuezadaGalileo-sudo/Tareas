let nombre = prompt("Ingrese su nombre: ");
let carnet = prompt("Ingrese su número de carné: ");
let respuesta;
do{
    const numeroAleatorio = Math.floor(Math.random() * 9 ) + 1;
    
    let numeroAdivinado = prompt("Ingrese un número entre 3 y 6");
    
    while(numeroAdivinado < 1 || numeroAdivinado > 9){
         numeroAdivinado = prompt("Por favor, ingrese un número entre 3 y 6 ");
    }
    
        if(numeroAdivinado > numeroAleatorio)
        {
            alert("La computadora eligió " + numeroAleatorio + ", usted eligió " + numeroAdivinado + ". Su elección es mayor ¡Ha adivinado!");
            respuesta = prompt("¿Desea jugar otra vez?");
        } else if(numeroAdivinado < numeroAleatorio){
            alert("La computadora eligió " + numeroAleatorio + ", usted eligió " + numeroAdivinado + ". Su elección es menor ¡Ha adivinado!");
            respuesta = prompt("¿Desea jugar otra vez?");
        } else {
            alert("La computadora eligió " + numeroAleatorio + ", usted eligió " + numeroAdivinado + ". Su elección es igual ¡Ha adivinado!");
            respuesta = prompt("¿Desea jugar otra vez?");
        }

} while(respuesta === "Si");

alert("Gracias por jugar " +nombre+ " con carné No "+carnet);
