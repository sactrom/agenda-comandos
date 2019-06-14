const fs= require('fs');
const color=require('colors');
let listadoPorHacer=[];
const guardarDB=()=>{
    let data=JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error ('No se pudo guardar',err);
        
      });
}
const cargarDB=()=>{
    try {
        listadoPorHacer=require('../db/data.json'); 
    } catch (error) {
        listadoPorHacer=[];
    }
}
const listarTareas=()=>{
   cargarDB();
for (const tarea of listadoPorHacer) {
    console.log('==========Por Hacer==========='.green);
        console.log(`Descripción ${tarea.descripcion}`);
        console.log(`Status ${tarea.completado}`);
        console.log('=============================='.green);
}   
   
}

const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};
const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion)
    if (index >=0) {
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
const borrar =(descripcion)=>{
    cargarDB();
    let nuevoListado=listadoPorHacer.filter(tarea=>tarea.descripcion !==descripcion);
    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer=nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports={
    crear,
    listarTareas,
    actualizar,
    borrar
}