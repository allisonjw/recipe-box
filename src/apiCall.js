const key = `dc540c9b2a9f44d4b08417b1b2d2a919`;

export const getSearchApi = async (query) => {
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${query}`
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Error searching for the recipe');
    }
    const data = await response.json();
    console.log('apicall', data)
    return data
};