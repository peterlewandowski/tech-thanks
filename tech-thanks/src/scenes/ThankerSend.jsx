import React, {useState,useContext, useEffect} from 'react';
import { Input } from '@mui/material'; 
import {UserContext} from "../components/context/UserContext"
import {oneWayHash} from "../components/services/hash"

const ThankerSend = () => {
    const {user,setUser} = useContext(UserContext);
    const [starChosen, setStarChosen] = useState(0)
    const [email,setEmail] = useState("");
    const [url,setUrl] = useState("")
    

useEffect( () => {


    const getHash = async (passedEmail) =>  {
       oneWayHash(passedEmail).then(emailHashed => {

        setUrl("https://techthanks.com/thanks/" +emailHashed );
       })

    }
    if (email && starChosen > 0 )  {
        getHash(email)
    console.log("yeah")
    }

},[email,starChosen])





    const handleStar = (star) => {
        setStarChosen(star.target.id);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
      }


    return (
        <>
            <h2>Let's thank that Mentor that got you into tech</h2>
            <div id="whowethank">Who are we thanking:    <Input placeholder="Their email" onChange={handleEmail}  /></div>
            <div id="starSelection">
            <div className={"startChoose "+ (starChosen > 0 ? "chosen" : "") } id="1"  onClick={handleStar}>🌟</div>
            <div className={"startChoose "+ (starChosen > 1 ? "chosen" : "")  }  id="2"   onClick={handleStar}>🌟</div>
            <div className={"startChoose "+ (starChosen > 2 ? "chosen" : "")  }  id="3"   onClick={handleStar}>🌟</div>
            <div className={"startChoose "+ (starChosen > 3 ? "chosen" : "")  }   id="4"  onClick={handleStar}>🌟</div>
            <div className={"startChoose "+ (starChosen > 4 ? "chosen" : "")  }   id="5"   onClick={handleStar}>🌟</div>
            </div>
            {
                url  ? 
                <div> 
                    You've chose to send  {starChosen} 🌟's to {email}<br />
                    <b><a href={url}>{url}</a></b>

                </div> 
                : ""
           
            }


        </>
    );
}

export default ThankerSend;
