import { useContext } from "react";
import {UserContext} from "../components/context/UserContext"


export default function ThankerAßccount() {
  const {user,setUser} = useContext(UserContext);
  console.log("user from thankseraccount",user)
  return (<>
  <h2>Thanker's acount</h2>
  Your Address: {user.address}
  </>
  )
}
