import React from 'react';
import './App.scss';
import { SearchForm } from '../SearchForm/SearchForm';

export const App = () => {
  return (
    <main className="App">
      <h1>The Recipe Box</h1>
      <p className="app_description">We all have our favorite recipes and need them all stored somewhere easily accessible. Welcome the Recipe Box. Just like grandma used to have. Search for a recipe based on name or ingredient. If you want to add this recipe to your box, tab over to recipe card and hit enter to check the box.</p>
        <SearchForm />
    </main>
  );
}

export default App;
