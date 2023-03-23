/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const array1 = ['pippo', 'PLUTO', 'Paperino']

const new_array = array1.map((char) => {
    //console.log(char);
    const correct_char = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()
    return correct_char
})

console.log(new_array);