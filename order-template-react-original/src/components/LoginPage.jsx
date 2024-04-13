import { useState } from "react";
import Item from './Item';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        /*
        Make DB query to check account credentials
        */
    }

    return (
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
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <button className={'inputButton'} type="submit" value={'Log in'} >Log In</button>
        </form>
    )





}