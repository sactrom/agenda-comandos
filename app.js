// Requiere
const {argv}=require('./config/yargs');
const{crear,actualizar,listarTareas,borrar}=require('./module/por-hacer');
const color=require('colors');

let comando =argv._[0];

switch (comando) {
    case 'crear':
        let tarea =crear(argv.descripcion);
        console.log(tarea.green);
        break;
    case 'actualizar':
       let actualizado=actualizar(argv.descripcion,argv.completado);
       console.log(actualizado);
        break;
    case 'listar':
       listarTareas();
        break;
        case 'borrar':
       let borrados=borrar(argv.descripcion);
       console.log(borrados);
        break;
            
    default:
        console.log(`No se reconoce el comando ${comando}`);
        break;
}
