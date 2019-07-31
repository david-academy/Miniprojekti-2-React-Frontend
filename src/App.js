import React, { Component } from 'react';

import './App.css';
import RecipeApp from './component/RecipeApp';


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <RecipeApp/>

            </div>
        );
    }
}

export default App;
