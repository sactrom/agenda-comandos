const opts={
    descripcion:{alias:'d',demand:true,desc:'Descripción de la tarea por hacer'},
    completado:{
        alias:'c',
        default:true,
        desc:"Status de la tarea"
    }
}
const argv=require('yargs')
.command('crear','Crea una nueva tarea por realizar',opts)
.command('actualizar','Actualiza la tarea ya registrada en el sistema',opts)
.command('borrar','Borrar tarea del sistema',opts)
.help()
.argv;

module.exports={
    argv
}