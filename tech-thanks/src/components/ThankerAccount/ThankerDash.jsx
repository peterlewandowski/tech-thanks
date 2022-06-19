import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function ThankerDash () {
const {user} = useContext(UserContext);
    return (
        <div>
            <h3>Your ThankCoins:</h3>
            {user.thankcoins}
        </div>
    );
}


