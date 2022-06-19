import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function ThankerDash () {
const {user} = useContext(UserContext);
    return (
        <div>
            <h4>Your ThankCoins:</h4>
            {user.thankcoins}
        </div>
    );
}


