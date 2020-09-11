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
    <div className="directions_holder" aria-label="image and instructions holder">
    <img className="recipe_img" alt="a recipe box" src={require('../images/keyboard2.png')}></img>
      <p className="app_description">The beauty of this site is it's ease of use. Simply use the Tab button to move down the page. To go back up the page hold down Tab and Shift at the same time. To select a favorite recipe to be added to the recipe box, tab to the checkbox on the recipe card and push the Enter button.</p>
    </div>
    <div className="note_holder" aria-label="container with image">
      <img className="tool_img" alt="a recipe box" src={require('../images/tools.png')}></img>
      <h2 className="message_h2">Happy Cooking!</h2>
      <img className="hat_img" alt="a recipe box" src={require('../images/chef_hat.png')}></img>
    </div>
        <SearchForm />
    </main>
  );
}

export default App;
