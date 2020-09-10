import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addRecipes } from '../actions';
import './SearchForm.scss';
import { getSearchApi } from '../apiCall';
import { KeyMap } from '../KeyMap';
import { HotKeys } from 'react-hotkeys';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipes] = useState([]);
  const [query, setQuery] = useState(' ');
  const [favorite, setFavorites] = useState({})
//   const recipes = useSelector(state => state.recipes)

  const searchApi = async (e) => {
    e.preventDefault()
    try {
        const searchedRecipes = await getSearchApi(query);
        setRecipes(searchedRecipes.results);
        dispatch(addRecipes(searchedRecipes))
    } catch(error) {
        console.log(error);
    }
  }

    // useEffect(() => {
    //   searchApi();
    // }, []);

      const addRecipe = (e) => {
          e.preventDefault();
          setFavorites([...favorite, favorite]);
      }
    
    return (
        <>
        <KeyMap>
            <form className="form" onSubmit={searchApi}>
              <label className="label" htmlFor="query">Enter a Recipe Name or Ingredient</label>
              <input className="input" type="text" name="query"
                placeholder="i.e. Lasagna"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
              <button className="button" type="submit">Search</button>
           </form>
        <div className="recipe-list" aria-label="list of recipes to match search">
        {recipe.map((recipe, index) => (
            <HotKeys handlers={{ ENTER: () => addRecipe(index) }} key={index}>
            <div className="recipe" key={recipe.id} aria-label="detailed information about recipe">
                <img 
                    src={recipe.image}
                    // alt="prepared food from recipe"
                    className="recipe--image">
                </img>
                <div className="recipe--content">
                  <h3 className="recipe--title">{recipe.title}</h3>
                  <p className="recipe--info">Cook Time: {recipe.readyInMinutes}</p>
                  <p className="recipe--info">Servings: {recipe.servings}</p>
                  <a 
                    href={recipe.sourceUrl} 
                    aria-label="link to recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe--info">
                      Link to Recipe
                  </a>
                  <button 
                    onClick={(e) => addRecipe(e, index)}
                    // onSubmit={(e) => addRecipe(e)}
                    className="recipe--favorite">
                        Favorite
                   </button>
                </div>
            </div>
            </HotKeys>
        ))}
    </div> 
        </KeyMap>
        </>
    )
}

export default SearchForm;