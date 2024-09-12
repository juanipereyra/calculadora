function obtenerNotaReferencia() {
    let notareferencia = parseFloat(prompt("Ingrese la nota con la que se accede a promoción:"));
    
    if (isNaN(notareferencia) || notareferencia <= 0) {
        alert("Por favor ingrese una nota válida.");
        return obtenerNotaReferencia(); 
    }

    return notareferencia;
}

function capturarNotas() {
    let notas = [];
    let nota;


    do {
        nota = parseFloat(prompt("Ingrese las notas obtenidas. Ingrese 0 cuando haya terminado."));
        
        if (nota !== 0) {
            if (isNaN(nota) || nota < 0) {
                alert("Por favor ingrese una nota válida.");
            } else {
                notas.push(nota); 
            }
        }
    } while (nota !== 0);

    return notas;
}

function calcularPromedio(notas) {
    if (notas.length > 0) {
        let sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0); 
        return sumaNotas / notas.length;
    } else {
        alert("No se ingresaron suficientes notas para calcular un promedio.");
        return 0;
    }
}

function determinarCondicion(promedionotas, notareferencia) {
    if (promedionotas >= notareferencia) {
        alert(`FELICIDADES! Con un promedio de ${promedionotas.toFixed(2)}, estás promocionado.`);
    } else {
        alert(`Lo siento, con un promedio de ${promedionotas.toFixed(2)}, no alcanzaste la nota de promoción.`);
    }
}

function simuladorPromedios() {
    alert("Bienvenido a la calculadora de promedios! Indicanos cuál es la nota de promoción, posteriormente tus notas y te informamos tu condición.");

    let notareferencia = obtenerNotaReferencia();
    let notas = capturarNotas();
    let promedionotas = calcularPromedio(notas);

    if (promedionotas > 0) {
        determinarCondicion(promedionotas, notareferencia);
    }
}

do {
    simuladorPromedios();
    var continuar = confirm("¿Desea calcular otro promedio?");
} while (continuar);

alert("Gracias por usar nuestra calculadora de promedios!");
