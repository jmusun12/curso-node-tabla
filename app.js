const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();
console.log(argv);

// uso del process
// const [ , , arg3 = 5 ] = process.argv;
// const [, base = 5 ] = arg3.split('=');

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'.green))
    .catch(err => console.error(err));