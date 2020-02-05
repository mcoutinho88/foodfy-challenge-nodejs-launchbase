const ingredientContent = document.querySelector('.ingrediente-content');
const ingredientShowHide = document.getElementById("ingrediente")

const preparoContent = document.querySelector('.preparo-content');
const preparoShowHide = document.getElementById("preparo")

const infoContent = document.querySelector('.info-content');
const infoShowHide = document.getElementById("info")

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

preparoShowHide.onclick = function(){
    console.log("button pressed")
    if(preparoContent.style.display == "none"){
        preparoContent.style.display = "block"
        preparoShowHide.textContent = "Esconder"
    }
    else
    {
        preparoContent.style.display = "none"
        preparoShowHide.textContent = "Mostrar"

    }
}

infoShowHide.onclick = function(){
    console.log("button pressed")
    if(infoContent.style.display == "none"){
        infoContent.style.display = "block"
        infoShowHide.textContent = "Esconder"
    }
    else
    {
        infoContent.style.display = "none"
        infoShowHide.textContent = "Mostrar"

    }
}