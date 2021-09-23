import React, { Component } from 'react'
import { Navbar,Container ,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export class Header extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Flower Shop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/Favourite">Favourite</Link>
                            
                           { isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header)
