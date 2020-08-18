
var inpu = "";
var inpu_two = "";
var op = 0;
var resul = ""


function input(x){
    x = String(x);
    if (op == 0){
        inpu = inpu + x;
        document.getElementById("resultado").innerHTML = inpu;
    }
    else{
        inpu_two = inpu_two + x;
        document.getElementById("resultado").innerHTML = inpu_two;
    }
}
function resta(){
    document.getElementById("resultado").innerHTML = "-"; 
    op = 2;
}

function sumar(){
    document.getElementById("resultado").innerHTML = "+"; 
    op = 1;
}

function multi(){
    document.getElementById("resultado").innerHTML = "x"; 
    op = 3;
}

function divi(){
    document.getElementById("resultado").innerHTML = "/"; 
    op = 4;
}

function igual(){
    switch(op){
        case 1:
            resul = Number(inpu) + Number(inpu_two);
            document.getElementById("resultado").innerHTML = resul;
            break
        case 2:
            resul = Number(inpu) - Number(inpu_two);
            document.getElementById("resultado").innerHTML = resul;
            break
        case 3:
            resul = Number(inpu) * Number(inpu_two);
            document.getElementById("resultado").innerHTML = resul;
            break
        case 4:
            resul = Number(inpu) / Number(inpu_two);
            document.getElementById("resultado").innerHTML = resul;
            break
    }
    inpu = resul
    inpu_two = ""
    op = 0
    document.getElementById("resultado").innerHTML = resul;

}

function reset(){
    inpu = ""
    inpu_two = ""
    op = 0;
    resul = "0"
    document.getElementById("resultado").innerHTML = resul;
}