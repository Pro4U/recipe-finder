import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
    return(
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Recipe4U</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form inline>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search Your Favourite Dish"
                            className="mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Search</Button>
                        </Col>
                        </Row>
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#all">All Recipes</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>

                </Container>
            
            </Navbar>
        </div>
    );
}

export default Header;