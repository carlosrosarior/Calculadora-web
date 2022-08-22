var display = 0;
var historia = "";
var num1 = 0;
var ultimaOperacion;

setInterval(mostrardisplay, 1)

function mostrardisplay(){
    document.getElementById("resultado").innerHTML = display
}

function hacerClear(){
    display = ""
    historia = ""
    ultimaOperacion = ""
    num1 = 0
    document.getElementById("historia").innerHTML = historia
}

function agregarnumero(numero){
    if(display == 0)
    {
        display = String(numero);
    }
    else
    {
        display += String(numero);
    }
}

function sumar(datos){
    if(ultimaOperacion == 0)
    {
        if(num1 != 0){
            if(datos != 0){

            }
        }
        else{
            if(datos != 0){
                num1 = parseInt(datos)
                historia += datos
                historia += " + "
                display = 0;
                document.getElementById("historia").innerHTML = historia
            }
        }
    }
    else
    {
        if(datos != 0){
            num1 += parseInt(datos)
            historia = num1
            historia = historia.slice(-3);
            historia += " + "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
    ultimaOperacion = 0;
}

function restar(datos){
    ultimaOperacion = 1;
    if(num1 != 0){
        if(datos != 0){
            num1 -= parseInt(datos)
            historia = num1
            historia += " - "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
    else{
        if(datos != 0){
            num1 = parseInt(datos)
            historia += datos
            historia += " - "
            display = 0;
            document.getElementById("historia").innerHTML = historia
        }
    }
}

function igual(datos){
    if(num1 != 0){
        switch (ultimaOperacion){
            //Sumar
            case 0:
                num1 += parseInt(datos)
                historia = ""
                display = num1;
                document.getElementById("historia").innerHTML = historia
            break;
            //Restar
            case 1:
                num1 -= parseInt(datos)
                historia = ""
                display = num1;
                document.getElementById("historia").innerHTML = historia
            break;

            case 2: 

            break;

            case 3:

            break;
        }
        num1 = 0
    }
}
