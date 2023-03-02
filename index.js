// Follow along with the examples here

function sayHello() {
    console.log("Hello!");
}

sayHello()

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

sayHelloToGuadalupe()

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

sayHelloToLiz()

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

sayHelloToSamip()

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Jose");
sayHelloTo("Jane");
sayHelloTo("Elias");

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

console.log(say("Hola", "liz"));

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"))