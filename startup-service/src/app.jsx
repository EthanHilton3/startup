import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className="text-light">
                <header className="flex">
                    <nav className="navbar flex navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-brand" href="#">
                            Cougar Clicker
                        </div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link" to="">
                                Login
                            </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                <NavLink className='nav-link' to='play'>
                                    Play
                                </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                <NavLink className='nav-link' to='scores'>
                                    Scores
                                </NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                            <NavLink className="nav-link" to="about">
                                About
                            </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
            </div>
                
        
                <Routes>
                    <Route
                        path='/'
                        element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />
                        }
                        exact
                    />
                    <Route path='/play' element={<Play userName={userName} />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        
                <footer className="flex bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Ethan Hilton</span>
                        <a href="https://github.com/EthanHilton3/startup">
                            GitHub
                        </a>
                    </div>
                </footer>
            
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}