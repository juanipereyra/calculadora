let sumanotas = 0;

let cantidadnotas = 0;

let nota;

let promedionotas = 0

let notareferencia = parseFloat(prompt("Ingrese nota con la que se accede a promoción"));

do{
    nota = parseFloat(prompt("ingrese notas obtenidas, una vez finalizado ingrese 0"))

    if (nota!== 0){
        sumanotas = sumanotas + nota;
        cantidadnotas++;
        console.log(sumanotas)
    } } while (nota !== 0);

 if (cantidadnotas > 0) {

    promedionotas = sumanotas / cantidadnotas;
 
} else {
    alert("no suministró datos suficientes")
 }  

 if (promedionotas >= notareferencia){
   
    alert ("FELICIDADES! Estás promocionado")
 } else {
    alert ("Lo siento, no has alcanzado la nota de promoción")
}

