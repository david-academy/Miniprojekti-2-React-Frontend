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
        this.updateRecipeClicked = this.updateRecipeClicked.bind(this)
        this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this)
        this.addRecipeClicked = this.addRecipeClicked.bind(this)
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

    updateRecipeClicked(id) {
        console.log('update' + id)
        this.props.history.push(`/reseptit/${id}`)
    }

    deleteRecipeClicked(id) {
        RecipeDataService.deleteRecipe(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of recipe ${id} successful` })
                    this.refreshRecipes()
                }
            )
    }

    addRecipeClicked() {
        this.props.history.push(`/reseptit/-1`)
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Recipes</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Ingredients</th>
                            <th>Instructions</th>
                            <th>Update</th>
                            <th>Delete</th>
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
                                        <td><button className="btn btn-success" onClick={() => this.updateRecipeClicked(recipe.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteRecipeClicked(recipe.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addRecipeClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListRecipesComponent