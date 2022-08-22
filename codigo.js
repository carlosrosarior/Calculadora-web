var display = 0;
var historia = "";
var num1 = 0;
var ultimaOperacion = "";
let currentNumber = undefined;

const resultadoDisplay = document.getElementById("resultado")
const historia = document.getElementById("historia")

const onButtonPress = () => {
    refreshDisplay()
}

setInterval(mostrardisplay, 1)

function mostrardisplay(){
    resultadoDisplay.innerHTML = display
}

function hacerClear(){
    display = ""
    historia = ""
    ultimaOperacion = ""
    num1 = 0
    document.getElementById("historia").innerHTML = historia
}

function punto(datos){
    if(datos != "" && datos.includes(".") == false){
        datos += "."
        display = datos
    }
}

function refreshDisplay() {
    resultadoDisplay.innerHTML = currentNumber ? currentNumber : 0
}

function agregarnumero(numero){
    if (currentNumber == undefined) {
        currentNumber = numero
    } else {
        currentNumber *= 10
        currentNumber + numero
    }
    onButtonPress()
    // if(display == "0")
    // {
    //     display = String(numero);
    // }
    // else
    // {
    //     display += String(numero);
    // }
}

function sumar(datos){
    if(num1 != 0){
        if(datos != 0){
            num1 = operaciones(display)
            historia = num1
            historia += " + "
            display = 0
            document.getElementById("historia").innerHTML = historia
        }
        else{
            historia = historia.slice(0, -3)
            historia += " + "
            document.getElementById("historia").innerHTML = historia
        }
    }
    else{
        if(datos != 0){
            num1 = parseFloat(datos)
            historia += datos
            historia += " + "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
    ultimaOperacion = 0;
}

function restar(datos){
    if(num1 != 0){
        if(datos != 0){
            num1 = operaciones(display)
            historia = num1
            historia += " - "
            display = 0
            document.getElementById("historia").innerHTML = historia
        }
        else{
            historia = historia.slice(0, -3)
            historia += " - "
            document.getElementById("historia").innerHTML = historia
        }
    }
    else{
        if(datos != 0){
            num1 = parseFloat(datos)
            historia += datos
            historia += " - "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
    ultimaOperacion = 1;
}

function multiplicar(datos){
    if(num1 != 0){
        if(datos != 0){
            num1 = operaciones(display)
            historia = num1
            historia += " * "
            display = 0
            document.getElementById("historia").innerHTML = historia
        }
        else{
            historia = historia.slice(0, -3)
            historia += " * "
            document.getElementById("historia").innerHTML = historia
        }
    }
    else{
        if(datos != 0){
            num1 = parseFloat(datos)
            historia += datos
            historia += " * "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
    ultimaOperacion = 2;
}



function operaciones(datos){
    switch (ultimaOperacion){
        //Sumar
        case 0:
            num1 += parseFloat(datos)
        break;
        //Restar
        case 1:
            num1 -= parseFloat(datos)
        break;
        //Multiplicar
        case 2: 
            num1 *= parseFloat(datos)
        break;
    }
    return num1;
}


function igual(datos){
    if(num1 != 0){
        num1 = operaciones(display)
        historia = ""
        display = num1;
        document.getElementById("historia").innerHTML = historia
        num1 = 0
    }
}
