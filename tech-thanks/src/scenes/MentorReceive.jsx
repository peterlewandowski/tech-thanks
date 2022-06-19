import { useContext } from "react";
import {UserContext} from "../components/context/UserContext"
import { Link, useParams } from "react-router-dom";
import { Input } from '@mui/material'; 
import { useState } from "react";
import {oneWayHash,getDomain} from "../components/services/hash"

export default function MentorReceive() {
  const {user,setUser} = useContext(UserContext);
  const [verifiedEmail,setverifiedEmaill] = useState("")
  const [typedEmail,setTypedEmail] = useState("")
  let { hash } = useParams();

  const handleEmail = (e) => {
    setTypedEmail(e.target.value);
     oneWayHash(e.target.value).then(possibleHash => {
            if (possibleHash ==hash ) {
                setverifiedEmaill(e.target.value)
            }
    })
  }



  return (
  
  <>
    <h2>You've been lucky enough to receive some ThankCoins! Type to cash them out!</h2>
    {verifiedEmail ? 
             <div>this is{verifiedEmail} has been verified</div>
    :
        <div>
          We need the email the person that thanked you used:
             <Input placeholder="Their email" onChange={handleEmail}  />
         </div>
     
    }
 
  </>
  )
}
