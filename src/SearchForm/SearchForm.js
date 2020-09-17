import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, addRecipes, removeFavorite } from '../actions';
import './SearchForm.scss';
import { getSearchApi } from '../apiCall';
import { KeyMap } from '../KeyMap';
import { HotKeys } from 'react-hotkeys';
import { Modal } from '../Modal/Modal';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipes] = useState([]);
  const [query, setQuery] = useState(' ');
  const [favorite, setFavorites] = useState([]);
  const [show, setShow] = useState(false);
  // const recipes = useSelector(state => state.recipesReducer)
  // const favorites = useSelector(state => state.favoriteReducer)

  const searchApi = async (e) => {
    e.preventDefault()
    try {
        const searchedRecipes = await getSearchApi(query);
        setRecipes(searchedRecipes);
        dispatch(addRecipes(searchedRecipes))
    } catch(error) {
        console.log(error);
    }
  }

      const toggleRecipe = () => {
        // dispatch(addFavorite(favorite));
        setFavorites(favorite);
          recipe.map(recipe => recipe.id).includes(recipe.id) ?dispatch(addFavorite(recipe)) : dispatch(removeFavorite(recipe));
      }
    
    return (
        <>
        <KeyMap>
            <form className="searchForm" onSubmit={searchApi}>
              <label className="label" htmlFor="query">Enter a Recipe Name or Ingredient</label>
              <input className="input" type="text" name="query"
                placeholder="i.e. Lasagna"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
              <button className="search_button" type="submit">Search</button>
           </form>
        <div className="recipe_list" aria-label="list of recipes to match search">
        {recipe.map((recipe, index) => (
            <HotKeys handlers={{ ENTER: (e) => toggleRecipe(index, e) }} key={index}>
            <div className="recipe" key={recipe.id} aria-label="detailed information about recipe">
                <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe_image">
                </img>
                <div className="recipe_content">
                  <h3 className="recipe_title">{recipe.title}</h3>
                  <p className="recipe_info">Cook Time: {recipe.readyInMinutes}</p>
                  <p className="recipe_info">Servings: {recipe.servings}</p>
                  <a 
                    href={recipe.sourceUrl} 
                    aria-label="link to recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe_info">
                      Link to Recipe
                  </a>
                  <button 
                    onClick={() => toggleRecipe(index)}
                    onClick={() => setShow(true)}
                    className="recipe_favorite">
                        Favorite
                   </button>
                   <Modal show={show} setShow={setShow}>
                        This recipe was added to your box!
                   </Modal>
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