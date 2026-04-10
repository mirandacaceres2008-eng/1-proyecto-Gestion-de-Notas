const aprendices = [ { nombre: "Ana", nota: 4.5, programa: "ADSO" }, 
     { nombre: "Luis",nota: 2.8, programa: "ADSO" },
      { nombre: "Marta", nota: 3.7, programa: "Diseno Web" }, 
      {nombre: "Pedro", nota: 1.9, programa: "ADSO" }, 
      { nombre: "Sofia", nota: 5.0, programa:"Diseno Web" } ];

function mostrarAprendices () {
    console.log("lista de aprendices");

    aprendices.forEach(a => {
        console.log(a.nombre + " -" +  a.nota + " -" + a.programa);
    });
} 

function mostrarAprobados() {
    const aprobados = aprendices.filter(a => a.nota >= 3);

    console.log("aprendices aprobados", aprobados);
 aprobados.forEach(a => {
    console.log(a.nombre + "-" + a.nota);
 });
}

function mostrarReprobados() {
    const reprobados = aprendices.filter(a => a.nota < 3);
    console.log("Aprendices reprobados", reprobados);

    reprobados.forEach(a => {
        console.log(a.nombre + "-" + a.nota);
    });
}

function calcularPromedio() {
    const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
    const promedio = suma / aprendices.length;

    console.log("promedio", promedio);
    
}

// Funcion 5: Nombres mayuscula

function nombresMayuscula() {
    const nombres = aprendices.map(a => a.nombre.toUpperCase());
    console.log(nombres);
}

// Funcion 6: Ordenar mayor a menor 

function ordenarPorNota() {
    const ordenados = aprendices.sort((a, b) => b.nota - a.nota);
    console.log("Aprendices ordenados por nota", ordenados);
}

 // Funcion 7: Clasificar
 function clasificarNota() {
    let nivel;
    switch (true) {
        case nota < 3:
        nivel = "Bajo";
        break;

        case nota < 4:
        nivel = "Basico";
        break;

        case nota < 4.5:
            nivel ="Alto";
        break;

        default:
        nivel = "Superior";
    }
    console.log("Nivel:", nivel)
}

//Funcion 8: Menu
function menu() {
    let opcion;
    while (opcion !== "0") {
    opcion = parseInt(prompt("MENU:\n1. Mostrar aprendices\n2. Mostrar aprobados\n3. Mostrar reprobados\n4. Calcular promedio\n5. Nombres en mayuscula\n6. Ordenar por nota\n7. Clasificar nota\n0. Salir"));
    
    switch (opcion){
        case 1:
            mostrarAprendices();
        break;
        
        case 2:
            mostrarAprobados();
        break;

        case 3:
            mostrarReprobados();
        break;

        case 4:
            calcularPromedio();
        break;

        case 5:
            nombresMayuscula();
        break;

        case 6:
            ordenarPorNota();
        break; 

        case 7:
            clasificarNota();
        break;

        case 0:
        console.log("Saliendo del programa...");
        break;

        default:
        console.log("Opcion no valida, por favor intente de nuevo.");
    }       
        
    }

 }
 menu();

 