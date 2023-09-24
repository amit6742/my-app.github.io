
import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainBody = () => {
  return (
    <div>
        <a href='#' logo/>
        <nav>
            <ul>
                <li><NavLink to='/'>mongos</NavLink></li>
                <li><NavLink to="/python">python</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
