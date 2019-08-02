import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Styles = {
    backgroundColor: "#D3D3D3",
    color: "white"

  }


export const NavigationBar = () => (
        <Navbar expand="lg" style={Styles}>
            <Navbar.Brand href="/"><Emoji label="reseptit" symbol="&#127860;"/> Reseptit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/"><Emoji label="kaikki" symbol="&#127859;"/> Kaikki</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="reseptit/liha"><Emoji label="liha" symbol="&#129385;"/> Liha</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/reseptit/kala"><Emoji label="kala" symbol="&#128031;"/> Kala</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kana"><Emoji label="kana" symbol="&#128020;"/> Kana</Link>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kasvis"><Emoji label="kasvis" symbol="&#129365;"/> Kasvis</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/keitto"><Emoji label="keitto" symbol="&#129379;"/> Keitto</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/salaatti"><Emoji label="salaatti" symbol="&#129367;"/> Salaatti</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/jalkiruoka"><Emoji label="jälkiruoka" symbol="&#127848;"/> Jälkiruoka</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/leivonta"><Emoji label="leivonta" symbol="&#129360;"/> Leivonta</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/juoma"><Emoji label="juoma" symbol="&#127865;"/> Juoma</Link>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/random"><Emoji label="mysteri" symbol="&#10067;"/></Link>
                    </Nav.Link>
                </Nav.Item>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
)
const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
    {props.symbol}
  </span>
)