/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const auto = [
    {
        marca: 'mercedes',
        modello: 'classe A',
        alimentazione: 'benzina',
    },
    {
        marca: 'mercedes',
        modello: 'CLA',
        alimentazione: 'diesel',
    },
    {
        marca: 'mercedes',
        modello: 'EQS',
        alimentazione: 'elettrica',
    },
    {
        marca: 'mercedes',
        modello: 'EQE',
        alimentazione: 'elettrica',
    },
    {
        marca: 'mercedes',
        modello: 'classe C',
        alimentazione: 'diesel',
    },
    {
        marca: 'mercedes',
        modello: 'classe E',
        alimentazione: 'benzina',
    },
    {
        marca: 'mercedes',
        modello: 'EQA',
        alimentazione: 'elettrica',
    },
    {
        marca: 'mercedes',
        modello: 'CLS',
        alimentazione: 'benzina',
    },
    {
        marca: 'mercedes',
        modello: 'AMG GT',
        alimentazione: 'GPL',
    },
    {
        marca: 'mercedes',
        modello: 'SL Roadster',
        alimentazione: 'benzina',
    },
]

const alimentazione_benzina = auto.filter((car) => {
    if (car.alimentazione == 'benzina') {
        return true
    }
})
console.log(alimentazione_benzina);

const alimentazione_diesel = auto.filter((car) => {
    if (car.alimentazione == 'diesel') {
        return true
    }
})
console.log(alimentazione_diesel);

const alimentazione_green = auto.filter((car) => {
    if (car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel') {
        return true
    }
})
console.log(alimentazione_green);