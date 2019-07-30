import axios from 'axios'

const INSTRUCTOR = 'recipesfordummies'
const RECIPE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `http://localhost:8080`

class RecipeDataService {

    retrieveAllRecipes(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/`);
    }
}

export default new RecipeDataService()