import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../utils/cartSlice';

const NavbarPanel = () => {
    const dispatch = useDispatch()

    const { cart, totalQuantity } = useSelector((store) => store.allCart)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Redux-Toolkit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>


                    </Nav>

                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text className='justify-content-end'>
                            <Nav.Link to="/cart" as={Link}>My Bag <span style={{ width: "20px", height: "20px", backgroundColor: "red", padding: "5px", borderRadius: "50%", fontWeight: "bold", color: "white", fontSize: "20px" }}>{totalQuantity}</span></Nav.Link>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarPanel