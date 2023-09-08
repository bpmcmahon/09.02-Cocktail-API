import showDrinks from './showDrinks.js';

const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

window.addEventListener(DOMContentLoaded, () => showDrinks(URL));