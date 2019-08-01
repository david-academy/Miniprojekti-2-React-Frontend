
import axios from 'axios'

const RECIPE_API_URL = `http://localhost:8080/reseptit`

class RecipeDataService {

    retrieveAllRecipes(name) {
        return axios.get(`${RECIPE_API_URL}`);
    }

    retrieveRecipe(name, id) {
        return axios.get(`${RECIPE_API_URL}/${id}`);
    }

    // updateRecipe(name, description, ingredients, instructions, id, recipe) {
    updateRecipe(name, id, recipe) {
        return axios.put(`${RECIPE_API_URL}/${id}`, recipe);
    }

    // createRecipe(name, description, ingredients, instructions, recipe) {
    createRecipe(name, recipe) {
        return axios.post(`${RECIPE_API_URL}`, recipe);
    }

    deleteRecipe(name, id) {
        //console.log('executed service')
        return axios.delete(`${RECIPE_API_URL}/${id}`);
    }
}

export default new RecipeDataService()