import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function ThankerDash () {
const {user} = useContext(UserContext);
    return (
        <div>
            <h4>Today you have {user.thankcoins} ThankCoins! WOO HOO!</h4>
        </div>
    );
}


