import React, { useState, useEffect } from 'react';
import './SearchForm.css';
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
console.log('fun', recipes)

    // useEffect(() => {
    //   searchApi();
    // }, []);
    
    return (
        <section>
            <form className="form" onSubmit={searchApi}>
            <label className="label" htmlFor="query">Recipe Name or Ingredient</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Lasagna"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="recipe-list">
        {recipes.map(recipe => (
            <div className="recipe" key={recipe.id}>
                <img className="recipe--image"
                    src={recipe.img}
                    alt={recipe.title}
                    />
                <div className="recipe--content">
                <h3 className="recipe--title">{recipe.title}</h3>
                <p>Cook Time: {recipe.readyInMinutes}</p>
                <p>Servings: {recipe.servings}</p>
                <p className="recipe--desc">Link:{recipe.sourceUrl}</p>
                </div>
            </div>
        ))}
    </div> 
        </section>
    )
}

export default SearchForm;