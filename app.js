const loadDrinks = ( ) =>{
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  

  .then(res => res.json())
  .then(data => showdrinks(data.drinks))
}

const showdrinks = drink =>{ 
  
  // container where put the pupolar drinks
  const container = document.getElementById("popular-drinks")
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
 