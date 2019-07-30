import React, { Component } from 'react';
import RecipeDataService from "../service/RecipeDataService";

const INSTRUCTOR = 'recipesfordummies'

class ListRecipesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            message: null
        }
        this.refreshRecipes = this.refreshRecipes.bind(this)
    }

    componentDidMount() {
        this.refreshRecipes();
    }

    refreshRecipes() {
        RecipeDataService.retrieveAllRecipes(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ recipes : response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Recipes</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>ingredients</th>
                            <th>instructions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.recipes.map(
                                recipe =>
                                    <tr key={recipe.id}>
                                        <td>{recipe.id}</td>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.description}</td>
                                        <td>{recipe.ingredients}</td>
                                        <td>{recipe.instructions}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRecipesComponent