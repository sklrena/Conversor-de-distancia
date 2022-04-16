let distanceLy = prompt("Qual a distância em anos luz?");
let chosenOption = prompt("Escolha a unidade de medida\n1- Parsec(PC)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)");
let chosenUnity;
let convertedDistance;

switch(chosenOption){
    case "1":
        chosenUnity = "Parsec(PC)";
        convertedDistance = distanceLy * 0.306601;
        break
    case "2":
        chosenUnity = "Unidade astronômica(AU)";
        convertedDistance = distanceLy * 63241.1;
        break
    case "3":
        chosenUnity = "Quilômetros(Km)";
        convertedDistance = distanceLy * 9.5 * Math.pow(10, 12);
        break
    default:
        chosenUnity = "Unidade não identificada";
        convertedDistance = "Conversão fora do escopo";
        break
}

alert("A distância em anos-luz é " + distanceLy + " e a disância convertida em " + chosenUnity + " é igual a " + convertedDistance);
