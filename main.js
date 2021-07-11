let nombre = prompt("Indicá tu nombre");

if(nombre == "") {
    alert("Tu nombre no puede estar vacío. Indicalo, por favor.");
}else{
    alert(nombre+", gracias por indicar tu nombre");
}

let genero = prompt(nombre+", indicá tu género, H por hombre, M por mujer o I por indefinido");

switch(genero) {
    case "H":
    case "h":
        alert(nombre+", gracias por indicar que sos hombre")
        break;
    case "M":
    case "m":
        alert(nombre+", gracias por indicar que sos mujer")
        break;
    case "I":
    case "i":
        alert(nombre+", gracias por indicar que tu género es indefinido")
        break;
    default:
        alert(nombre+", tu género no fue indicado como corresponde, por favor, indicá tu género, H por hombre, M por mujer o I por indefinido")
}

let edad = parseInt(prompt(nombre+", indicá tu edad"),0);

if((genero == "H" || genero == "h") && (edad <= 3)) {
    alert(nombre+", sos un bebé. Tomá la mamadera.")
}

if((genero == "H" || genero == "h") && (edad >3 && edad <= 13)) {
    alert(nombre+", sos un niño. Andá a jugar")
}

if((genero == "H" || genero == "h") && (edad >13 && edad <= 18)) {
    alert(nombre+", sos un adolescente. Ponete a estudiar.")
}

if((genero == "H" || genero == "h") && (edad >18 && edad <= 65)) {
    alert(nombre+", sos un adulto. Andá a trabajar.")
}

if((genero == "H" || genero == "h") && (edad >65 && edad <= 100)) {
    alert(nombre+", sos un señor mayor. Andá a descansar.")
}

if((genero == "H" || genero == "h") && (edad >100)) {
    alert(nombre+", probablemente estés muerto.")
}

if((genero == "M" || genero == "m") && (edad <= 3)) {
    alert(nombre+", sos una bebé. Tomá la mamadera.")
}

if((genero == "M" || genero == "m") && (edad >3 && edad <= 13)) {
    alert(nombre+", sos una niña. Andá a jugar")
}

if((genero == "M" || genero == "m") && (edad >13 && edad <= 18)) {
    alert(nombre+", sos una adolescente. Ponete a estudiar.")
}

if((genero == "M" || genero == "m") && (edad >18 && edad <= 65)) {
    alert(nombre+", sos una adulta. Andá a trabajar.")
}

if((genero == "M" || genero == "m") && (edad >65 && edad <= 100)) {
    alert(nombre+", sos una señora mayor. Andá a descansar.")
}

if((genero == "M" || genero == "m") && (edad >100)) {
    alert(nombre+", probablemente estés muerta.")
}

if((genero == "I" || genero == "i") && (edad <= 3)) {
    alert(nombre+", sos une bebé. Tomá la mamadera.")
}

if((genero == "I" || genero == "i") && (edad >3 && edad <= 13)) {
    alert(nombre+", sos une niñe. Andá a jugar")
}

if((genero == "I" || genero == "i") && (edad >13 && edad <= 18)) {
    alert(nombre+", sos une adolescente. Ponete a estudiar.")
}

if((genero == "I" || genero == "I") && (edad >18 && edad <= 65)) {
    alert(nombre+", sos une adulte. Andá a trabajar.")
}

if((genero == "I" || genero == "i") && (edad >65 && edad <= 100)) {
    alert(nombre+", sos une señore mayor. Andá a descansar.")
}

if((genero == "I" || genero == "i") && (edad >100)) {
    alert(nombre+", probablemente estés muerte.")
}