import React from 'react'


function Header() {
  return (
    
    <div className='header'>
      <div className='title'>
        <h1>Le blog d'Esther et son chat</h1>
      </div>
      <div className="bordure">
      <div className='categories'>
        <div className="biographie"> Photo biographie</div>
        <div className="actualites">Photos des actualités</div>
        <div className="implants">Photo implant</div>
      </div></div>
      <div className="histoire">
        <h1>HISTOIRE</h1>
        <p>La surdité selon Esther, pourquoi ce titre ? Au départ, je ne pensais pas créer un site sur la surdité. 
        Je me suis rendue compte que nous avions pas beaucoup de retour sur la surdité, l'implantation, les témoignages de l'implanté mais aussi des proches.
        C'est pourquoi, je me suis dit que j'allais parlé de ma surdité, du passé, du présent, du futur avec ma surdité. 
        Mais pas seulement, avec l'accord, les personnes entendants, malentendants, sourds pourront également témoigner de leurs parcours, de leurs craintes. à compléter </p>
      </div>

      
    </div>
  )
}

export default Header