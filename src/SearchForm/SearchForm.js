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
        </section>
    )
}

export default SearchForm;