const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: '-n es el numero de la multiplicacion'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: '-l lista o no si expecificas la -l'
    })
    .option('t', {
        alias: 'total',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: '-t y numero hasta donde multiplica'
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'Tiene que ser un numero'
        }
        if (argv.l) {

        }
        return true
    })
    .argv;

module.exports = argv;
