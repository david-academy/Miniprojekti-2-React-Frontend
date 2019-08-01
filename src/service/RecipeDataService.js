import axios from 'axios'

const RECIPE_API_URL = `http://localhost:8080/reseptit`

class RecipeDataService {

    retrieveAllRecipes(name) {
        return axios.get(`${RECIPE_API_URL}`);
    }
    retrieveAllKanaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/broileri`);
    }
    retrieveAllKalaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/kala`);
    }
    retrieveAllLihaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/liha`);
    }
    retrieveAllKasvisRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/kasvis`);
    }
    retrieveAllKeittoRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/keitto`);
    }
    retrieveAllSalaattiRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/salaatti`);
    }
    retrieveAllJalkiruokaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/jälkiruoka`);
    }
    retrieveAllJuomaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/juoma`);
    }
    retrieveAllLeivontaRecipes(name) {
        return axios.get(`${RECIPE_API_URL}/haekategorialla/leivonta`);
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
        return axios.post(`${RECIPE_API_URL}/`, recipe);
    }

    deleteRecipe(name, id) {
        //console.log('executed service')
        return axios.delete(`${RECIPE_API_URL}/${id}`);
    }
}

export default new RecipeDataService()