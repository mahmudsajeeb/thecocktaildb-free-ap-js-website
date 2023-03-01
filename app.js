const loadDrinks = (id ) =>{
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
  
  
  .then(res => res.json())
  .then(data => showdrinks(data.drinks))
 
}

const showdrinks = drink =>{ 

  // container where put the pupolar drinks
  const container = document.getElementById("popular-drinks")
  container.innerText=''
  // create div 
  drink.forEach( element =>{
    // console.log(element)
    const div = document.createElement('div')
    div.innerHTML=`
    <img src="${element.strDrinkThumb}" alt="">
    <h1 class="text-yellow-500 text-4xl">${element.strDrink}</h1>
    `
    container.appendChild(div)
  })
 
}
loadDrinks()

/// popural ingrediant 
const ingrediant =(data) =>{
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data}`)
  .then(res => res.json())
  .then(data => showIngrediant(data.drinks))
}

// show data
const showIngrediant =(ingree) =>{
  const incrediantContainer = document.getElementById('ingrediant-container')
  incrediantContainer.innerText = ''
  const div = document.createElement("div")
    ingree.forEach(element =>{
      console.log(element)
  
  div.innerHTML = `
  
  <img src="${element.strDrinkThumb}" alt="">
  <h1 class="text-yellow-500 text-4xl">${element.strDrink}</h1>
  `
  incrediantContainer.appendChild(div)
})
}
ingrediant()

 // search TheCocktailDB  item using input buttton 

 const theCocktailDB = () =>{
  const searchInput = document.getElementById("searchInput");
  const searchInputElement = searchInput.value 
  if(!searchInputElement){
    alert("Result not Found")
    return
  }
  loadDrinks(searchInputElement)
  ingrediant(searchInputElement)
}

// enter the key 
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});