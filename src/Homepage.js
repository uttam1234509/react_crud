import React from 'react'
import { NavLink } from 'react-router-dom'

export const Homepage = () => {
    return (
        <div style={{display:"flex",gap:"30px",textAlign:"center"}}>
            
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </div>
    )
}
