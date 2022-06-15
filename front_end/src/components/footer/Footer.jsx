import React from 'react'
import linkedin from './linkedin.png'
import github from './github.png'

function Footer() {
  return (
      <footer className='footer'>
        <p>PortFolio d'Esther BOUDRENGHIEN</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/esther-boudrenghien/" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/eboudrenghien" target="_blank">
              <img src={github} alt="github" />
            </a>
          </li>
        </ul>
      </footer>
  )
}

export default Footer