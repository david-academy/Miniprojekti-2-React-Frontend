import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
/*import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;*/

export const NavigationBar = () => (
        <Navbar expand="lg">
            <Navbar.Brand href="/">Reseptit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Kaikki</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="reseptit/liha">&#129385;</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/reseptit/kala">&#128031;</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kana">&#128020;</Link>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kasvis">&#129365;</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/keitto">&#129379;</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/salaatti">&#129367;</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/jalkiruoka">&#127848;</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/leivonta">&#129360;</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/juoma">&#127865;</Link>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/random">&#10067;</Link>
                    </Nav.Link>
                </Nav.Item>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
)