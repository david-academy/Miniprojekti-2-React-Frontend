import axios from 'axios'


const INSTRUCTOR_API_URL = `http://localhost:8080/reseptit`

class RecipeDataService {

    retrieveAllRecipes(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/`);
    }

    deleteRecipe(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }
}

export default new RecipeDataService()