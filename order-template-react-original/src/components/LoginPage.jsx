import { useState } from "react";
import Item from './Item';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userType, setUserType] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        /*
        Make DB query to check account credentials
        and determine if this is Jacobe's dad or a restuarant
        */
        return (
            <Router>
                <Routes>
                    <Route
                        path="/RestuarantDashboard"
                        element={!isLoggedIn ? <OrderForm /> : <Navigate to="/LoginPage" />}
                    />
                    <Route>
                    </Route>
                </Routes>
            </Router>
        )
    }

    return (
        <>
            <form onSubmit={handleLoginSubmit}>
                <div >
                    <div>Login</div>
                </div>
                <br />
                <div className="login-input-div">
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={'inputBox'}
                        required
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className="login-input-div">
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                        required
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <button className={'inputButton'} type="submit" value={'Log in'} >Log In</button>
            </form>
            <div>
                <p>Dont have an account?</p>
                <Link to="/CreateAccount">Create Account</Link>
            </div>
        </>
    )





}