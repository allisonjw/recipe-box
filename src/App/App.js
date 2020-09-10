import React from 'react';
import './App.scss';
import { SearchForm } from '../SearchForm/SearchForm';

export const App = () => {
  return (
    <main className="App">
        <h1>The Recipe Box</h1>
    <div className="paragraph_holder" aria-label="hold description of website">      
      <p className="app_description">We all have our favorite recipes and need them all stored somewhere easily accessible. Welcome the Recipe Box. Just like grandma used to have. Search for a recipe based on name or ingredient. If you want to add this recipe to your box, tab over to recipe card and hit enter to check the box.</p> 
      <img className="recipe_img" alt="a recipe box" src={require('../images/wooden-box.png')}></img>
      <br />
    </div>
      <p className="app_description">The beauty of this site is it's ease of use.<br />
      Simply use the Tab button to move down the page. <br />
      <br />
      To go back up the page hold down Tab and Shift at the same time. <br />
      <br />
      To select a favorite recipe to be added to the recipe box, tab to the checkbox on the recipe card and push the Enter button.</p>
        <SearchForm />
    </main>
  );
}

export default App;
