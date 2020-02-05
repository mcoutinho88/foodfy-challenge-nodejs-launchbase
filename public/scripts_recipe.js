const ingredientContent = document.querySelector('.ingrediente-content');
const ingredientShowHide = document.getElementById("ingrediente")

ingredientShowHide.onclick = function(){
    console.log("button pressed")
    if(ingredientContent.style.display == "none"){
        ingredientContent.style.display = "block"
        ingredientShowHide.textContent = "Esconder"
    }
    else
    {
        ingredientContent.style.display = "none"
        ingredientShowHide.textContent = "Mostrar"

    }
}