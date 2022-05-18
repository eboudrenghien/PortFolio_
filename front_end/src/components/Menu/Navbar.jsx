import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
        <div className="navbar">
            <ul>
                <li>
                  <Link to="/">ACCUEIL</Link>
                </li>
                <li><Link to="/biographie">BIOGRAPHIE</Link></li>
                <li>
                  <Link to="/actualites">ACTUALITÉS</Link>
                </li>
                <li><Link to="/implants">IMPLANTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li>S'INSCRIRE</li>
            </ul>
        </div>
  )
}

export default Navbar