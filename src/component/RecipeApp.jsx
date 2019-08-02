import React, { Component } from 'react';
import ListRecipesComponent from "./ListRecipesComponent";
import Kana from "./Kana";
import Kala from "./Kala";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipeComponent from './RecipeComponent';
import {NavigationBar} from "./NavigationBar";
import Jalkiruoka from "./Jalkiruoka";
import Salaatti from "./Salaatti";
import Keitto from "./Keitto";
import Kasvis from "./Kasvis";
import Leivonta from "./Leivonta";
import Juoma from "./Juoma";
import Random from "./Random";
import Liha from "./Liha";
import Jumbo from "./Jumbo";


class RecipeApp extends Component {
    render() {
        return (
            <Router>
                <NavigationBar/>
                <Jumbo/>

                <>
                    <Switch>
                        <Route path="/" exact component={ListRecipesComponent} />
{/*
                        <Route path="/reseptit" exact component={ListRecipesComponent} />
*/}
                        <Route path="/reseptit/kana"  exact component={Kana} />
                        <Route path="/reseptit/liha"  exact component={Liha} />
                        <Route path="/reseptit/kala"  component={Kala} />
                        <Route path="/reseptit/kasvis"  component={Kasvis} />
                        <Route path="/reseptit/keitto"  component={Keitto} />
                        <Route path="/reseptit/salaatti"  component={Salaatti} />
                        <Route path="/reseptit/jalkiruoka"  component={Jalkiruoka} />
                        <Route path="/reseptit/leivonta"  component={Leivonta} />
                        <Route path="/reseptit/juoma"  component={Juoma} />
                        <Route path="/reseptit/random"  component={Random} />
                        <Route path="/reseptit/:id" component={RecipeComponent} />
                        <Route path="/reseptit" component={ListRecipesComponent}/>

                        {/*<ListRecipesComponent/>*/}
                    </Switch>
                </>
            </Router>

        )
    }
}
export default RecipeApp