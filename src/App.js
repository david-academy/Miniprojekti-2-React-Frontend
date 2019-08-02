import React, { Component } from 'react';

import './App.css';
import RecipeApp from './component/RecipeApp';
const footerStyle = {
    backgroundColor: "grey",
    fontSize: "10px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

function Footer({ children }) {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}

class App extends Component {

    render() {
        return (

            <div className="container-fluid">
                <RecipeApp/>
                <Footer>
                    <span>Miniprojekti 2 kesä 2019: Created by: Kirsi Kujala, Tuomas Lahti & David Andberg @Academy.fi <a href="https://github.com/kirsi-k/Miniprojekti-2-React-Frontend">frontend</a> <a href="https://github.com/kirsi-k/Miniprojekti-2-Backend">backend</a></span>
                </Footer>
            </div>
        );
    }
}

export default App;
