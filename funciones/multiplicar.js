const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(num, list, total) => {
    
    try {
        let salida = ''
        let consola = ''
        
        for (let index = 1; index <= total; index++) {
            salida += `${num} x ${index} = ${num * index}\n`
            consola += `${num} ${`x`.red} ${index} ${`=`.red} ${num * index}\n`
        }
        
        if (list) {
            console.log('================================'.rainbow);
            console.log(`===== tabla del ${num} =========`.red);
            console.log('================================'.rainbow);

            console.log( consola );
            console.log('================================');
        }
        
        fs.writeFileSync(`./salida/tabla-${ num }.txt`, salida);
            
        
        return `tabla-${ num }.txt creado` 
        
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}