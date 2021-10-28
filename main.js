let suma=0;
let promedio=0;
let contador=0;

let materias = document.getElementById('materias');
let valores=[];
let valor = document.getElementById('valores');

let btnMaterias = document.getElementById('btn-materias');
let btnValores = document.getElementById('btn-valores');

let mostrar = document.getElementById('btn-mostrar');
let cancelar = document.getElementById('btn-cancelar');

btnMaterias.addEventListener('click', establecer);

function establecer(){

    if(materias.value != 0){
        valores.length = materias.value;

        document.getElementById('form-box--1').style.display = 'none';
        document.getElementById('ready-box--1').style.display = 'block';
    };
    
    console.log(valores);

};

btnValores.addEventListener('click', agregar);

function agregar(){

    if(valor.value != '' || valor.value != 0){
        if( contador<valores.length ){
            valores[contador]= parseInt(valor.value);
            contador++;
            console.log(valores);
        }
    
        if( valores[valores.length-1] != undefined ){
            document.getElementById('form-box--2').style.display = 'none'
            document.getElementById('ready-box--2').style.display = 'flex'
            mostrar.style.display='block'
        }

        valor.value='';
    }

}

mostrar.addEventListener('click', mostrarResultado);

function mostrarResultado(){

    for(let i=0; i<valores.length; i++){
        suma = suma + valores[i]
        console.log(suma);
    }

    promedio = suma/valores.length;

    document.getElementById('result').innerText = 'El resultado es ' + promedio; 

    mostrar.style.display = 'none'

    cancelar.innerText = 'De nuevo'
}

cancelar.addEventListener('click', deNuevo)

function deNuevo(){
    contador = 0;
    valores = [];
    suma = 0;
    promedio = 0;

    console.log(valores);

    document.getElementById('form-box--1').style.display = 'grid';
    document.getElementById('ready-box--1').style.display = 'none';

    materias.value = '';

    document.getElementById('form-box--2').style.display = 'grid'
    document.getElementById('ready-box--2').style.display = 'none'

    document.getElementById('result').innerText = 'Resultado'; 

    cancelar.innerText = 'Cancelar'
}