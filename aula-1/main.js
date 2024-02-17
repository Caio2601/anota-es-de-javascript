//ESTRUTURAS DE REPETIÇÃO

for (let index = 0; index < 10; index++) {
    console.log(index);
}

const cars = ["ferrari", "tesla", "mercedes"];

//tres formas de usar o for na lista
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
})

//while loops

let index = 0;

while (index < 10) {
    console.log("Index é menor do que 10!");
    index++
}

//for in usado em objetos

const person = {
    name: "jane",
    age: 21,
};

for (property in person) {
    console.log(person[property]);
}



//CONDICIONAIS

if e else


const sum = 1 + 1;

if (sum === 2) {
    number = 2;
} else {
    number + 4;
}

//mesma coisa de cima so que com ternary operator

let number = sum === 2 ? 2 : 4;

//O ? siginifica que se a senteça for verdadeira tudo que vier depois do ? vai aparecer no console, ja o : é se não for verdadeira.

console.log(number);

//operadoes and(&&) e or (||)

//SWITCH

const car = "tesla";

switch (car) {
    case "mercedes":
        console.log("mercedes is beautiful");
        break;
    case "ferrari":
        console.log("ferrari is red");
        break;
    case "tesla":
        console.log('tesla is very smart');
        break;
}

//CONCEITOS DE TRUTHY E FALSY

//FALSE

const x = '';
console.log(!!x);

const y = 0;
console.log(!!y);

const a = null;
console.log(!!a);

const b = underfined;
console.log (!!b);

//FUCTION

function nome(parametro1, parametro2) {
    console.log(parametro1 + parametro2);
}

//OU

function nome(parametro1, parametro2) {
    return a +b;
}

const nomeValue = nome(2);

console.log(nomeValue);

//ARROW FUNCTIONS

const nomeArrow2 = (a, b = 10) => {
    return a +b;
};

//ou

const nomeArrow = (a, b = 10) => a +b;


//ORIENTADA A OBJETO

class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

const animal = new animal("simba");

//Herança

class dog extends animal {
    constructor(name){
        super(name);
    }
}

const dog = new dog("bob");

dog.speak();

//DOM

//Como selecionar um elemento do html no javascript, primeiro precisa cria um id na tag que voce quer manipular no html. depois ultiliza isso no javascript.

//SELECIONAR UM ELEMENTO

const nome = document.getElementById("nome-da-id");

nome.innerHTML = "";

//ou

const nome = document.querySelector(#nome-da-id);

nome.TextContent = "";

//quando for utilizar o query selector dentro do parentes antes de colocar o nome voce precisa colocar "#" se for um id ou "." se for uma class.

//SELECIONAR MULTIPLOS ELEMENTOS

const allItens  = document.querySelectorAll("nome-da-class");

//outra forma(não recomendada de usar)

const allItems = document.getElementsByClassName("nome-da-clas");