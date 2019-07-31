import React, { Component } from 'react';
import RecipeDataService from "../service/RecipeDataService";
import Accordion from "./Accordion";
import Card from "react-bootstrap/Card";


const INSTRUCTOR = 'recipesfordummies'

class ListRecipesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            message: null
        }
        this.refreshRecipes = this.refreshRecipes.bind(this)
        this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this)
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

    deleteRecipeClicked(id) {
        RecipeDataService.deleteRecipe(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of recipe ${id} successful` })
                    this.refreshRecipes()
                }
            )

    }

    render() {
        return (
            <div className="container">
                <h3>All Recipes</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container-fluid">

                    <Accordion allowMultipleOpen>
                        {this.state.recipes.map((recipe, id)=>(
                        <div label={recipe.name} isOpen eventKey="id">
                            <table>
                                <thead>
                                <tr>
                                    <th>Kuvaus</th>
                                    <th>Ainesosat</th>
                                    <th>Ohjeet</th>
                                    <th>Poista</th>
                                </tr>
                                </thead>

                                <tbody>
                                {/* {
                            this.state.recipes.map(
                                recipe =>*/}
                                <tr key={recipe.id}>
                                    <td>{recipe.description}</td>
                                    <td>{recipe.ingredients}</td>
                                    <td>{recipe.instructions}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteRecipeClicked(recipe.id)}>Poista resepti</button></td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                            ))}
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default ListRecipesComponent