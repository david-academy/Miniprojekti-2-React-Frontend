import React, {Component} from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

class Jumbo extends Component {
    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + "http://worldkings.org/Userfiles/Upload/images/Yale.jpg" + ')',
        };

        return (
            <div>
                <Jumbotron fluid>
                    <h1>Maailman paras reseptihaku-appi ikinä</h1>
                    <br/>
                    <p>
                        A crowd-sourced archive of recipes.
                    </p>



                </Jumbotron>
            </div>
        );
    }
}
export default Jumbo