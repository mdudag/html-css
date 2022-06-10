const input = document.getElementById("input")
const lista = document.querySelector("#list")

            // input.value - o que está dentro do elemento

function soma (a, b) {
    return a + b
}

function mult (a, b) {
    return a * b
}

function fatorial(num) {
    let fat = 1

    for (let cont = 1; cont <= num; cont++) {
        fat *=  cont
    }

    return fat
}

function oi() {
    console.log ("arvore")
}

function inp() {
    lista.innerHTML          // parametro
    lista.innerHTML += "<li>"+input.value+"</li>"
}








































// console.log ("algo")  // tipo printf
// console.error ("oi")
// alert ("algo")

 // 3 tipos: var, let e const

// escopo: var - global   let - local

{
    var a = 2
    console.log (a)
}

let x = 4
console.log (x)

x = 4.5
console.log (x)

x = "algo"
console.log (x)