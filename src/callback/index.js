//Es una funcion que al crearla le pasamos como parametro una segunda
//funcion y de esta forma al momento de hacer una peticion o un llamado
//asincrono esta se ejecuta despues de este llamado

function sum(num1, num2) {
    return num1 + num2;
}
//por estandar la funcion que se pide como parametro se llama callback
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
//llamado
console.log(calc(6, 2, sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate (dateNow) {
    console.log(dateNow);
}

date(printDate);