import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const Shownavbar = ({children}) => {
    const location = useLocation();
    const [shownavbar, setshownavbar] = useState(false);
    useEffect(() =>{
        if(location.pathname === '/login' || location.pathname === '/signup'){
            setshownavbar(false);
        }
        else{
            setshownavbar(true);
        }
    }, [location])
  return (
    <div>
      {shownavbar && children}
    </div>
  )
}

export default Shownavbar
