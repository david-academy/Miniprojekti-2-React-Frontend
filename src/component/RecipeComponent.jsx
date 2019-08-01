import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecipeDataService from "../service/RecipeDataService";

const INSTRUCTOR = 'recipesfordummies'

class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                id: this.props.match.params.id,
                name: '',
                description: '',
                ingredients: '',
                instructions: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        RecipeDataService.retrieveRecipe(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                description: response.data.description,
                ingredients: response.data.ingredients,
                instructions: response.data.instructions
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter text'
        } else if (values.description.length < 2) {
            errors.description = 'Enter atleast 2 characters in description'
        }
        return errors
    }

    onSubmit(values) {
        let username = INSTRUCTOR

        let recipe = {
            id: this.state.id,
            name: values.name,
            description: values.description,
            ingredients: values.ingredients,
            instructions: values.instructions,
        }

        if (this.state.id === -1) {
            RecipeDataService.createRecipe(username, recipe)
                .then(() => this.props.history.push('/reseptit/'))
        } else {
            RecipeDataService.updateRecipe(username, this.state.id, recipe)
                .then(() => this.props.history.push('/reseptit'))
        }
        console.log(values);
    }

    render() {

        let { name, description, ingredients, instructions, id } = this.state
        // Sama kuin let name = this.state.name
        // let description = this.state.description jne.

        return (
            <div>
                <h3>Recipe</h3>
                <div className="container">
                    <Formik
                        // Miksi initialValues on esimerkissä eri tavalla
                        initialValues={{ id, name, description, ingredients, instructions }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Ingredients</label>
                                        <Field className="form-control" type="text" name="ingredients" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Instructions</label>
                                        <Field className="form-control" type="text" name="instructions" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default RecipeComponent