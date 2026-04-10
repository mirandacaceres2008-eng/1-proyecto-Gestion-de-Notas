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

