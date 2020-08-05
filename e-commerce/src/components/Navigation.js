import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Style = styled.div`
.navbar {
    background-color: #484848;
  }
.navbar-brand{
    color: white;
    margin-left: 20px;
    margin-right: 50px;

  }

  .navbar-toggler { 
    border-color: white; 
} 

a, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

// <Nav.Item>
//     <Nav.Link>
//         <Link to="/search"><FontAwesomeIcon icon={faSearch} size="lg" /> Search</Link>
//     </Nav.Link>
// </Nav.Item>

export const Navigation = () => (
    <Style>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="/"><strong>Athleticize </strong><FontAwesomeIcon icon={faDumbbell} size="lg" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/Mens">MENS</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/Womens">WOMENS</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/track">TRACK ORDER</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">ABOUT US</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item style={{ marginRight: "4rem" }}>
                        <Nav.Link>
                            <Link to="/Cart"><FontAwesomeIcon icon={faShoppingCart} size="lg" fixedWidth /> My Cart</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Style>
)