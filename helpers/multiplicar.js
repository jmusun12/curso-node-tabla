const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 2, hasta = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.red(base)} ${'x'.magenta} ${colors.red(i)} = ${(base * i).toString().cyan}\n`;
        }

        if (listar) {
            console.log('====================='.yellow);
            console.log(`    TABLA DEL: ${colors.blue(base)}`.green);
            console.log('====================='.yellow);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}
