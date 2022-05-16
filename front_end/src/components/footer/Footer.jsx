import React from 'react'
import linkedin from './linkedin.png'
import github from './github.png'

function Footer() {
  return (
    <div className='footer'>
      <p>La surdité selon Esther</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/esther-boudrenghien/">
            <img src={linkedin} alt="linkedin" /> 
          </a>
        </li>
        <li>
          <a href="https://github.com/eboudrenghien">
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer