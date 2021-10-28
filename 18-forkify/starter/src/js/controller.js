import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../img/icons.svg'; // parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    // put in a guard clause if there is no id
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe and store it in state object
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};
showRecipe();

// change recipe when page loads or hash changes
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
