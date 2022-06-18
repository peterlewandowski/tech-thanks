import React, {useState} from 'react';
import { Input } from '@mui/material'; 
import { useContext } from 'react';
import {UserContext} from "../components/context/UserContext"

const ThankerSend = () => {
    const {user,setUser} = useContext(UserContext);

    return (
        <>
            <h2>Let's thank that Mentor that got you into tech</h2>
            <div id="starSelection">
            <div className="startChoose"><input type="checkbox" id="start1" className="visually-hidden" /></div>
            <div className="startChoose">🌟</div>
            <div className="startChoose">🌟</div>
            <div className="startChoose">🌟</div>
            <div className="startChoose">🌟</div>
            </div>
            <Input placeholder="Input 2" />


        </>
    );
}

export default ThankerSend;
