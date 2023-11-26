import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"

function PrivateRoute() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    //L'object de l'utilisateur
    const objectUser = user[0]

    useEffect(() => {

    const connected = () => {
        if(objectUser.id === 0) {
            navigate(`/login`, { replace: true })
        } 
    }
    connected()
    }, [objectUser,user,navigate])
    
    return(
        <Outlet/>
    )

}
  
  export default PrivateRoute