import { useState } from "react";


export default function CreateAccount() {
    const [accountDetails, setAccountDetails] = useState({
        restaurantName: "",
        companyEmail: "",
        companyPassword: ""
    });
    const [confirmedPassword, setConfirmedPassword] = useState('');

    /*
    const [restaurantName, setRestaurantName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (confirmedPassword !== accountDetails.companyPassword) {
            alert('Passwords do not match');
        }
        /*
        Make DB query to check account credentials
        */
    }

    const handleConfirmedPasswordChange = (e) => {
        const newConfirmedPassword = e.target.value;
        setConfirmedPassword(newConfirmedPassword);
    }


    return <form id="create-account-form" onSubmit={handleCreateAccount}>
        <div className="create-account-form-item">
            <label>Restaurant Name</label>
            <input
                name="restaurantName"
                type="text"
                value={accountDetails.restaurantName}
                onChange={handleChange}
                className="create-account-form-input"
            />
        </div>
        <div className="create-account-form-item">
            <label>Email</label>
            <input
                name="companyEmail"
                type="email"
                value={accountDetails.companyEmail}
                onChange={handleChange}
                className="create-account-form-input"
            />
        </div>
        <div className="create-account-form-item">
            <label>Password</label>
            <input
                name="companyPassword"
                type="password"
                value={accountDetails.companyPassword}
                onChange={handleChange}
                className="create-account-form-input"
            />
        </div>
        <div className="create-account-form-item">
            <label>Confirm Password</label>
            <input
                type="password"
                value={confirmedPassword}
                onChange={handleConfirmedPasswordChange}
                className="create-account-form-input"
            />
        </div>
        <button type="submit">Create Account</button>
    </form>










}