import React, { Component } from 'react';

import './App.css';
import RecipeApp from './component/RecipeApp';
import Jumbo from "./component/Jumbo";


class App extends Component {
    render() {
        return (

            <div className="container-fluid">

                <Jumbo/>
                <RecipeApp/>

            </div>
        );
    }
}

export default App;
