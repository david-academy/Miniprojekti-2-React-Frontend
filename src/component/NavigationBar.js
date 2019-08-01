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
                            <Link to="reseptit/liha">Liha</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/reseptit/kala">Kala</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kana">Kana</Link>
                    </Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/kasvis">Kasvis</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/keitto">Keitto</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/salaatti">Salaatti</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/jalkiruoka">Jälkiruoka</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/leivonta">Leivonta</Link>
                    </Nav.Link>
                </Nav.Item>
                     <Nav.Item>
                    <Nav.Link>
                        <Link to="/reseptit/juoma">Juoma</Link>
                    </Nav.Link>
                </Nav.Item>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
)