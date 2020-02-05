const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes){
    recipe.addEventListener('click', function() {
        const imgId = recipe.getAttribute('id');
        window.location.href = `/recipes/${imgId}`;
    }
    )
}

