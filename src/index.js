import validator from './validator.js';
//Se le agrega un evento al id boton, el cual pertence a la etiqueta del <button>, y se crea una función.
document.getElementById('boton').addEventListener('click', function (){
    //Se crean dos variables. En el primero, su valor se trae desde index.html con el id. En el segundo, se trae el id de una etiqueta p vacía. 
    const card = document.getElementById('numberCard').value;
    const parrafo = document.getElementById('parrafo');
    //Si no se coloca ningún número aparecerá un alert pidiendo colocar algún número.
        if (card == '') {
            alert ('Para poder validar tu tarjeta es necesario colocar el número que viene en tu plástico.')
    }  else {  
        //Se crea una variable, el valor asignado se trae desde el objeto validator.js      
        let validar = validator.isValid(card);
        //Se valida que sea una tarjeta válida y aparece un mensaje.
            if (validar){
                document.getElementById('numberCard').value = validator.maskify(card);               
                parrafo.textContent = "TARJETA VÁLIDA";
            } else { //Si no es válida aparece un mensaje.
                document.getElementById('numberCard').value = validator.maskify(card);
                parrafo.textContent = "X TARJETA NO VÁLIDA X"             
            }             
            } 
    }
)