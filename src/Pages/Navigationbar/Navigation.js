import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigation = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                user ? <button className='' onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;