import { useEffect } from "react"
import {
    Route,
  } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const PrivateRoutes = (props) => {
    let history = useHistory()
    
    useEffect(()=> {
        let session = sessionStorage.getItem('account')
        if(!session){
            history.push("/login")
            window.location.reload() //location points to what page we currently at, this means reload /login
        }
    }, [])
    return (
        <>
        <Route path={props.path} component={props.component}/>
        </>
    )
}

export default PrivateRoutes