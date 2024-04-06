const nombre = 'Miguel Angel';
const apellido = 'LBarrera';

// const fullName = nombre + ' ' + apellido; 

// El uso de los TEMPLETE STRINGS 

const fullName = ` ${nombre} ${apellido} ${8 + 2}`;

/* const fullName = `
${nombre}
${apellido}
`; */


console.log(fullName);


function getSaludo(name){
    return `Hola ${name}`;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`)