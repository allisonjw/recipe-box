import React, { useState, useEffect } from 'react';
import './SearchForm.scss';
import { getSearchApi } from '../apiCall';

export const SearchForm = () => {
  const [query, setQuery] = useState(' ');
  const [recipes, setRecipes] = useState([]);

  const searchApi = async (e) => {
    e.preventDefault()
    try {
        const searchedRecipes = await getSearchApi(query);
        setRecipes(searchedRecipes.results);
    } catch(error) {
        console.log(error);
    }
}
    // useEffect(() => {
    //   searchApi();
    // }, []);
    
    return (
        <section>
            <form className="form" onSubmit={searchApi}>
            <label className="label" htmlFor="query">Enter a Recipe Name or Ingredient</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Lasagna"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="recipe-list" aria-label="list of recipes to match search">
        {recipes.map(recipe => (
            <div className="recipe" key={recipe.id} aria-label="detailed information about recipe">
                <img className="recipe--image"
                    src={recipe.image}
                    alt={recipe.title}
                />
                <div className="recipe--content">
                  <h3 className="recipe--title">{recipe.title}</h3>
                  <p>Cook Time: {recipe.readyInMinutes}</p>
                  <p>Servings: {recipe.servings}</p>
                  <a 
                    href={recipe.sourceUrl} 
                    aria-label="link to recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe--desc">
                      Link to Recipe
                  </a>
                </div>
            </div>
        ))}
    </div> 
        </section>
    )
}

export default SearchForm;