const $form = document.querySelector("form");
const b = document.querySelector('#b')
    const v = document.querySelector('#v')
    const a = document.querySelector('#a, value')
  
    
    function c (){
        const aliquota = parseInt(a.value)        
        const base_calculo = parseInt(b.value)        
        const valor_pactuado = parseInt(v.value )    
        const valor_final = (base_calculo - valor_pactuado) * (aliquota/100) 
       
        //window.alert(valor_final)

    
   // obs
    //obs //

    if (!base_calculo != 0 || !valor_pactuado!=0) {
       alert('Todos os campos precisam ser preenchidos') 
  }  
    else if (base_calculo === valor_pactuado){
        alert('Não precisa de restituição')    
    } 
    else if (base_calculo < valor_pactuado){
      alert('Valor pactuado menor que a base de cálculo')    
    } 
    else {
      alert(`Tem direito a R$ ${valor_final} de restituição`)
    }
    }

    //function createAlert(msg) {
    //    document
    //      .querySelector("body")
    //      .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);
    //  
    //    setTimeout(function () {
    //      deleteAlert();
   //     }, 3000);
    //  }
    //  function deleteAlert() {
    //    const list = document.querySelectorAll(".alert");
    //    for (const item of list) {
     //     item.remove();
   //     }
     // }
      
      $form.addEventListener("submit", function (event) {
        event.preventDefault();
       
      });
