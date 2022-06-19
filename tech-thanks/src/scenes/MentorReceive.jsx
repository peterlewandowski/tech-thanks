import { useContext } from "react";
import {UserContext} from "../components/context/UserContext"
import { Link, useParams } from "react-router-dom";

export default function MentorReceive() {
  const {user,setUser} = useContext(UserContext);
  let { hash } = useParams();

  return (<>
  <h2>Mentor Receive</h2>
  Your Address: {user.address}
  and your hash is: {hash}
  </>
  )
}
