import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Background from './test.jpg';

class Jumbo extends Component {
    render() {

        return (
            <Jumbotron style={styles.container}>

                <h1><strong>Reseptikirjasi</strong> interwebissä</h1>
                <h5>Lue, hae, luo ja muokkaa suosikkireseptejäsi täällä</h5>

            </Jumbotron>
        );
    }
}


    const styles = {
    container: {
        backgroundSize: 'cover',
        height: "350px",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        backgroundImage: `url(${Background})`,
        borderRadius: "0px",
        textAlign: "center",
/*
        display: "flex"
*/


}

};



export default Jumbo;