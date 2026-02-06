let mes = prompt("Ingrese el mes de su nacimiento: ");
let dia = prompt("Ingrese el día de su nacimiento: ");

let mes_nacimiento = parseInt(mes, 10);
let dia_nacimineto = parseInt(dia, 10);

if((mes_nacimiento == 3 && dia_nacimineto >= 21 && dia_nacimineto <=  31) || (mes_nacimiento == 4 && dia_nacimineto >= 1 && dia_nacimineto <= 20)){
    alert("Aries ");
} else if((mes_nacimiento == 4 && dia_nacimineto >= 21 && dia_nacimineto <=  30) || (mes_nacimiento == 5 && dia_nacimineto >= 1 && dia_nacimineto <= 20)){
    alert("Tauro ");
} else if ((mes_nacimiento == 5 && dia_nacimineto >= 21 && dia_nacimineto <=  31) || (mes_nacimiento == 6 && dia_nacimineto >= 1 && dia_nacimineto <= 20)){
    alert("Géminis ");
} else if ((mes_nacimiento == 6 && dia_nacimineto >= 21 && dia_nacimineto <=  30) || (mes_nacimiento == 7 && dia_nacimineto >= 1 && dia_nacimineto <= 22)){
    alert("Cáncer ");
} else if((mes_nacimiento == 7 && dia_nacimineto >= 23 && dia_nacimineto <=  31) || (mes_nacimiento == 8 && dia_nacimineto >= 1 && dia_nacimineto <= 23)) {
    alert("Leo");
} else if((mes_nacimiento == 8 && dia_nacimineto >= 24 && dia_nacimineto <=  31) || (mes_nacimiento == 9 && dia_nacimineto >= 1 && dia_nacimineto <= 22)){
    alert("Virgo");
} else if ((mes_nacimiento == 9 && dia_nacimineto >= 23 && dia_nacimineto <=  30) || (mes_nacimiento == 10 && dia_nacimineto >= 1 && dia_nacimineto <= 23)){
    alert("Libra");
} else if((mes_nacimiento == 10 && dia_nacimineto >= 24 && dia_nacimineto <=  31) || (mes_nacimiento == 11 && dia_nacimineto >= 1 && dia_nacimineto <= 22)){
    alert("Escorpio");
} else if((mes_nacimiento == 11 && dia_nacimineto >= 23 && dia_nacimineto <=  30) || (mes_nacimiento == 12 && dia_nacimineto >= 1 && dia_nacimineto <= 21)){
    alert("Sagitario");
} else if((mes_nacimiento == 12 && dia_nacimineto >= 22 && dia_nacimineto <=  31) || (mes_nacimiento == 1 && dia_nacimineto >= 1 && dia_nacimineto <= 20)){
 alert("Capricormio");
} else if((mes_nacimiento == 1 && dia_nacimineto >= 21 && dia_nacimineto <=  31) || (mes_nacimiento == 2 && dia_nacimineto >= 1 && dia_nacimineto <= 19)){
    alert("Acuario");
} else if((mes_nacimiento == 2 && dia_nacimineto >= 20 && dia_nacimineto <=  29) || (mes_nacimiento == 3 && dia_nacimineto >= 1 && dia_nacimineto <= 20)){
    alert("Piscis");
} else {
    alert("Fecha no válida");
}