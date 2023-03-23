/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const array1 = ['pippo', 'PLUTO', 'Paperino']

array1.forEach((char) => {
    //console.log(char);
    const correct_char = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()
    console.log(correct_char);
})