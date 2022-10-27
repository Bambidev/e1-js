// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
// a)  Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

// Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 
 
// Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 💸

const pizzas = [
    {
        "id": 1,
        "nombre": "Napo",
        "ingredientes": ['salsa', 'tomate', 'oregano'],
        "precio": 1800
    },
    {
        "id": 2,
        "nombre": "Muzza",
        "ingredientes": ['queso', 'salsa'],
        "precio": 1400
    },
    {
        "id": 3,
        "nombre": "Pepperoni",
        "ingredientes": ['salsa', 'tomate', 'pepperoni'],
        "precio": 1800
    },
    {
        "id": 4,
        "nombre": "Especial",
        "ingredientes": ['salsa', 'tomate', 'oregano', 'huevo'],
        "precio": 1900
    },
    {
        "id": 5,
        "nombre": "margarita",
        "ingredientes": ['salsa', 'tomate', 'mozzarella', 'albahaca'],
        "precio": 1800
    },
    {
        "id": 6,
        "nombre": "champiñon",
        "ingredientes": ['champiñones', 'oregano', 'quesio'],
        "precio": 1600
    }
]

console.log('----------- EJ 1 -----------');

pizzas.forEach(element => {
    if (element.id % 2 === 1) {
        console.log(`La pizza con el id: ${element.id} Se llama ${element.nombre} y vale: $${element.precio}`);
    }
});

console.log('----------- EJ 2 -----------');

function precioPizzas(precio) {
    const ejer2 = pizzas.find(pizza => pizza.precio < precio)
    if (ejer2 == undefined) {
        console.log('No hay pizzas mas baratas que','$',precio);
    } else {
        console.log('Hay pizzas mas baratas que','$',precio);
    }
}
precioPizzas(600)

console.log('----------- EJ 3 -----------');

pizzas.forEach(element => {
    console.log(`La pizza ${element.nombre} vale: $${element.precio}`);
});

console.log('----------- EJ 4 -----------');

pizzas.forEach(element => {
    element.ingredientes.forEach(ingrediente => {
        console.log(`La pizza ${element.nombre} tiene el ingrediente: ${ingrediente}`);
    })
});
