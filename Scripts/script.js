const searchBar= document.getElementById('searchBar');
searchBar.addEventListener("keyup",(e) =>{
    const searchString = e.target.value;

        const filteredOperators = operators.filter((operators) =>{
            return (
                operators.name.includes(searchString) ||
                operators.faction.includes(searchString)
            );
        });
        displayCharacters(filteredOperators);
    
});
const displayCharacters = (filteredOperators) =>{
    filteredOperators=filteredOperators.map((operators)=>{
        return `
            <a class="characterLink" href=${operators.link}><li class="character">
            <img class="listImage" src=${operators.image}>
            <span class="listName">${operators.name} - ${operators.faction}</span>
            </li></a>
        `
    })
    .join('')
    charactersList.innerHTML = filteredOperators;
}
const loadCharacters = async() => {
    try{
        displayCharacters(operators);
    } catch(err){
        console.log(err);
    }
};
loadCharacters();

const list = document.getElementById('charactersList');

searchBar.addEventListener('keyup', () => {
    list.classList.remove('listShow');
});

document.addEventListener("click",() => {
    list.classList.add('listShow')
})
