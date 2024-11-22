const calculadora = document.getElementById("calculadora")
const displayPrincipal = document.getElementById("display")
const botones = document.querySelectorAll(".button")

displayPrincipal.textContent = "0"

botones.forEach(button => {
    button.addEventListener("click", () =>{
    const value = button.value

    if(value === "C"){
        displayPrincipal.textContent = "0"
    }else if (value === "="){
             displayPrincipal.textContent = calcularResultado(displayPrincipal.textContent)
    }else {
        if(displayPrincipal.textContent === "0"){
            displayPrincipal.textContent = value
        }else{
            displayPrincipal.textContent += value
        }
    }

  })
});

function calcularResultado(expresion){
    try{
        let resultado = Function(`"use strict"; return ${expresion}`)()
        return resultado.toString()
    }catch(err){
        return "Error"
    }
}
