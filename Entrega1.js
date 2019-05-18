//"use strict";
 
 let materias = [
    {
        id: 1,
        nombre: 'NodeJs',
        duracion: 48,
        valor: 50000 
    },
    {
        id: 2,
        nombre: 'Html 5',
        duracion: 72,
        valor: 70000 
    },
    {
        id: 3,
        nombre: 'Java Web Desarrollo',
        duracion: 96,
        valor: 80000 
    },
    {
        id: 4,
        nombre: '.Net',
        duracion: 72,
        valor: 85000 
    },
    {
        id: 5,
        nombre: 'Phyton',
        duracion: 120,
        valor: 185000 
    }
    ];

let MostrarMateria=(id)=>{
    let estudianteNota = materias.find(function(notaEst ) {
return notaEst.id == id});
console.log('el id del curso es: '+estudianteNota.id + ', el nombre del curso es: '+estudianteNota.nombre);
console.log('la duracion del curso es: '+estudianteNota.duracion + ' horas, el valor del curso es: '+estudianteNota.valor);
}

const opciones ={
    idCurso:{
        demand:true,
        alias: 'i'
    },
    nombreEstudiante:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand:true,
        alias: 'x'
    }
}

function forEachAll(data, each) {
    var n = -1, result = [];
    var next = function () 
        {
            if (++n < data.length) { each(data[n], result, next); }
        } 
        next();
}
 
function muestraMateria(value, callback) {
    setTimeout(function() {
        let estudianteNota = materias.find(function(notaEst ) {
        return notaEst.id == value});
        console.log('el id del curso es: '+estudianteNota.id + ', el nombre del curso es: '+estudianteNota.nombre);
        console.log('la duracion del curso es: '+estudianteNota.duracion + ' horas, el valor del curso es: '+estudianteNota.valor);
        console.log('-----------------------');
        callback(value, value * value);
    }, 2000);
}
 

//const {estudiante,obtenerPromedio} = require ('./calculos');
const argv = require('yargs')
            .command ('inscribir','Inscribir el estudiante', opciones)
            .argv

const fs = require('fs');
//let {nombre, edad: viejitud, notas: {matematicas, ingles, programacion} }= estudiante;
let matricular = true;
let nombreEst = argv.nombreEstudiante;
let cedulaEst = argv.cedula;
let idCursoP = argv.idCurso;

let crearArchivo = (nombre,cedula,idCurso) =>{
    let estudianteNotaImp = materias.find(function(notaEst ) {return notaEst.id == idCurso});
    //console.log('el id del curso es: '+estudianteNota.id + ', el nombre del curso es: '+estudianteNota.nombre);
    if(estudianteNotaImp===undefined){Console.log('Materia no encontrada');}else{
        texto = 'el estudiante '+nombre+' con cedula numero '+cedula+'\n'+
            'ha sido matriculado en el curso: ' + idCurso+', llamado: '+estudianteNotaImp.nombre+'\n'+
            'con una duración de '+ estudianteNotaImp.duracion + ' horas y el valor del curso es: '+estudianteNotaImp.valor;
        fs.writeFile('prematricula.txt',texto,(err)=>{
        if (err) 
        {
            console.log('ocurrio un error en el proceso de matricula, hagase revisar');
            throw (err);
        }
        console.log('se ha matriculado correctamente y creado el archivo')
            });
        }
    }
//crearArchivo(nombreEst,cedulaEst,idCursoP);
if(process.argv.length > 2)
{
    if(process.argv[2] === 'inscribir')
        {
            let estudianteNotaImp = materias.find(function(notaEst ) {return notaEst.id == idCursoP});
    //console.log('el id del curso es: '+estudianteNota.id + ', el nombre del curso es: '+estudianteNota.nombre);
        if(estudianteNotaImp===undefined)
            {
                console.log('Materia no encontrada');
                console.log('Estos son los cursos disponibles: '+'\n');
                forEachAll([1,2,3,4,5],
                function(value, allresult, next) {
                    muestraMateria(value, function(value, result) {
                    next();
                    });
             
                    }
                
                );
            }else{
                MostrarMateria(idCursoP);
                crearArchivo(nombreEst,cedulaEst,idCursoP);}
        }
    else
        {console.log('no sirvio: '+argv.command);}
}else{
    console.log('Estos son los cursos disponibles: '+'\n');
    forEachAll([1,2,3,4,5],
    function(value, allresult, next) {
        muestraMateria(value, function(value, result) {
        next();
        });
 
    }
    
);
    //console.log("no tiene parametros");
}
//process.argv.forEach((val, index) => {
  //console.log(`${index}: ${val}`);
//});