const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            demandOption: false,
            default: false,
            type: 'boolean',
            describe: 'Mostrar la tabla en la consola'
        },
        'h': {
            alias: 'hasta',
            demandOption: false,
            default: 10,
            describe: 'Este es el número hasta donde quieres la tabla',
            type: 'number'
        }
    })
    .check((argv, options) => {
        if( isNaN(argv.b )) {
            throw 'La base tiene que ser un número';
        }

        // si no hay ningun error luego de todas las verificaciones
        // se debe retornar true

        return true;
    })
    .argv;


module.exports = argv;
