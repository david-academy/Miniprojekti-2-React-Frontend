import React, { Component } from 'react';
import RecipeDataService from "../service/RecipeDataService";
import Accordion from "./Accordion";


const INSTRUCTOR = 'recipesfordummies'

class Liha extends Component {

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
        RecipeDataService.retrieveAllLihaRecipes(INSTRUCTOR)//HARDCODED
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
        console.log()
    }


    render() {
        return (
            <div className="container">
                <h3>Leivonta reseptit</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
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
                                        <th>Kategoria</th>
                                        <th>Päivitä</th>
                                        <th>Poista</th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    <tr key={recipe.id}>
                                        <td>{recipe.description}</td>
                                        <td>{recipe.ingredients}</td>
                                        <td>{recipe.instructions}</td>
                                        <td>{recipe.category.name}</td>

                                        <td><button className="btn btn-success" onClick={() => this.updateRecipeClicked(recipe.id)}>Päivitä</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteRecipeClicked(recipe.id)}>Poista resepti</button></td>
                                    </tr>


                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </Accordion>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addRecipeClicked}>Lisää</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Liha