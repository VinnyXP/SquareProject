const { useState } = require("react");


function CreateAccount() {
    const [restaurantName, setRestaurantName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleCreateAccount = (e) => {
        e.preventDefault();

        /*
        Make DB query to check account credentials
        */
    }


    return <form>
        <div>


        </div>
    </form>










}