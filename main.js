let nombre = prompt("Indicá tu nombre");

if(nombre == "") {
    alert("Tu nombre no puede estar vacío. Indicalo, por favor.");
}else{
    alert("Gracias por indicar tu nombre");
}

let genero = prompt("Indicá tu género, H por hombre, M por mujer o I por indefinido");

switch(genero) {
    case "H":
    case "h":
        alert("Gracias por indicar que sos hombre")
        break;
    case "M":
    case "m":
        alert("Gracias por indicar que sos mujer")
        break;
    case "I":
    case "i":
        alert("Gracias por indicar que tu género es indefinido")
        break;
    default:
        alert("Tu género no fue indicado como corresponde, por favor, indicá tu género, H por hombre, M por mujer o I por indefinido")
}

let edad = parseInt(prompt("Indicá tu edad"),0);

if((genero == "H" || genero == "h") && (edad <= 3)) {
    alert("Sos un bebé. Tomá la mamadera.")
}

if((genero == "H" || genero == "h") && (edad >3 && edad <= 13)) {
    alert("Sos un niño. Andá a jugar")
}

if((genero == "H" || genero == "h") && (edad >13 && edad <= 18)) {
    alert("Sos un adolescente. Ponete a estudiar.")
}

if((genero == "H" || genero == "h") && (edad >18 && edad <= 65)) {
    alert("Sos un adulto. Andá a trabajar.")
}

if((genero == "H" || genero == "h") && (edad >65 && edad <= 100)) {
    alert("Sos un señor mayor. Andá a descansar.")
}

if((genero == "H" || genero == "h") && (edad >100)) {
    alert("Probablemente estés muerto.")
}

if((genero == "M" || genero == "m") && (edad <= 3)) {
    alert("Sos una bebé. Tomá la mamadera.")
}

if((genero == "M" || genero == "m") && (edad >3 && edad <= 13)) {
    alert("Sos una niña. Andá a jugar")
}

if((genero == "M" || genero == "m") && (edad >13 && edad <= 18)) {
    alert("Sos una adolescente. Ponete a estudiar.")
}

if((genero == "M" || genero == "m") && (edad >18 && edad <= 65)) {
    alert("Sos una adulta. Andá a trabajar.")
}

if((genero == "M" || genero == "m") && (edad >65 && edad <= 100)) {
    alert("Sos una señora mayor. Andá a descansar.")
}

if((genero == "M" || genero == "m") && (edad >100)) {
    alert("Probablemente estés muerta.")
}

if((genero == "I" || genero == "i") && (edad <= 3)) {
    alert("Sos une bebé. Tomá la mamadera.")
}

if((genero == "I" || genero == "i") && (edad >3 && edad <= 13)) {
    alert("Sos une niñe. Andá a jugar")
}

if((genero == "I" || genero == "i") && (edad >13 && edad <= 18)) {
    alert("Sos une adolescente. Ponete a estudiar.")
}

if((genero == "I" || genero == "I") && (edad >18 && edad <= 65)) {
    alert("Sos une adulte. Andá a trabajar.")
}

if((genero == "I" || genero == "i") && (edad >65 && edad <= 100)) {
    alert("Sos une señore mayor. Andá a descansar.")
}

if((genero == "I" || genero == "i") && (edad >100)) {
    alert("Probablemente estés muerte.")
}