import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navigation.css'

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
                                user && <Link to="/home" className='mx-2 button_Clr'>Home</Link>
                            }
                            {
                                user && <Link to="/dashboard" className='mx-2 button_Clr'>DashBoard</Link>
                            }
                            {
                                user ? <button className='btn btn-danger' onClick={logout} >Sign Out</button> : <Link className='btn btn-success button_Clr' to="/login">Login</Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;