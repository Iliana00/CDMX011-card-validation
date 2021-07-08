const validator = {
  isValid : function(creditCardNumber) {
    const numero = Array.from(creditCardNumber).map(Number).reverse();
    let suma = 0;
    for (let i = 0; i < numero.length; i++){
      if (i % 2 === 1){
        let mult = numero[i] * 2;
        if (mult >= 10){
        mult = mult - 10 + 1;
        }
        suma = suma + mult;
      } else {
        suma = suma + numero[i];
      }      
    } 
    if (suma % 10 === 0){
      return true
    } else{
      return false
    }       
 },
 maskify : function(creditCardNumber){
   const mask = creditCardNumber.length
  if (mask <= 4){
    return creditCardNumber
  } else {
    let listado = Array.from(creditCardNumber);
    for(let i = 0; i < creditCardNumber.length-4; i++){
      listado[i] ="#"
    }
    let enmascarar = listado.join("")
    return enmascarar
  }
 }
}
export default validator;
