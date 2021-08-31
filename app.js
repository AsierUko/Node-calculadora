const argv = require('./config/yargs');
const { crearArchivo } = require( './funciones/multiplicar' )

console.clear()



// console.log( process.argv );
console.log( argv );


// console.log('La tabla del', argv.n );

// const [ , , arg3 = 'tabla=5' ] = process.argv
// const [ , num = 5 ] = arg3.split('=');

// console.log(num);



// const num = 2121;

crearArchivo( argv.n, argv.l, argv.t )
    .then( nombreArchivo => console.log(nombreArchivo) )
    .catch( err => console.log(err) )

