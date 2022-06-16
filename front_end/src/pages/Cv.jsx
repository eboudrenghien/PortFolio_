import React from 'react'
import Profil from '../styles/assets/profil.png'
function Biographie() {
  return (
    <div className='biographie'>
      <div className="cvTitre">
        <h1>Développeuse Web FullStack</h1>
      </div>
      <div className="informations">
        <div className="experiencesFormations">
          <div className="experiences">
            <h3>EXPÉRIENCES</h3>
            <div className="2012">
              <p><span>2012 Agent d'accueil</span> - La poste - Marsannay-La-Côte et Chenôve (1 mois)</p>
              <p>Tâches : réception des colis, envoi des colis, renseigner un client, travail d’équipe, autonomie</p>
            </div>
            <div className="2013">
              <p><span>2013 Surveillante en restaurants scolaires et adjointe d’animation garderie au service Jeunesse </span>  - École Montchapet Primaire et Maternelle (3 ans)</p>
              <p>Tâches : accueil, veiller à leur sécurité, activités manuelles et loisirs, échanges avec les parents.</p>
            </div>
          </div>
          <div className="formations">
            <h3>FORMATIONS</h3>
            <p><span>2021 Développeuse FullStack JS</span> - Access Code School - OnlineFormaPro (en cours)</p>
            <p>Activités : to-do list JS et react.js, site sur le thème Nausicaá, site TeaTime Front-End (html, css, sass, react.js).</p>
            <p><span>2021 DAEU A - Diplôme d’Accès aux Études Universitaires Option A</span>  - Université de DIJON, CFOAD - Mention AB</p>
            <p><span>2019 Digital’Access</span> -IRFA DIJON - Chenôve (1 mois)</p>
            <p>Activités: Découverte des métiers numériques, utilisation des logiciels adobe.</p>
            <p><span>2019 Une formation pour moi !</span> - OnlineFormaPro (1 mois) </p>
            <p>Activités : recherche des métiers, activité création site web.</p>
            <p><span>2011 BAC PRO Service en Milieu Rural</span> - MFR d’Agencourt (1 an)</p>
            <p><span>2011 Brevet d’Étude Professionel Agricole : Alimentation et Bio-Industries</span> - Lycée Félix Kir - Plombières-Lès-Dijon - Obtenu </p>
            <p><span>2009 Bac PRO Bio Industriel de Transformation</span> - Lycée Félix Kir - Plombières-Lès-Dijon (2 ans)</p>
          </div>
        </div>
        <div className="profilCompetences">
          <div className="profil">
            <img src={Profil} alt="profil" />
            <div className="contact">
              <h3>Esther BOUDRENGHIEN</h3>
              <p>6 rue Ferdinand de Lesseps</p>
              <p>21000 DIJON</p>
              <p>Tel: 06.17.47.77.99</p>
              <p>Email : e.boudrenghien@codeur.online</p>
            </div>
          </div>
          <div className="competences">
            <h3>COMPÉTENCES</h3>
            <div className="frontEnd">
              <p className='titre'>FRONT-END</p>
              <p>Figma </p>
              <p>HTML/CSS</p>
              <p>JS</p>
              <p>React</p>
              <p>Bootstrap</p>
              <p>SaSS</p>
            </div>
            <div className="backEnd">
              <p className='titre'>BACK-END</p>
              <p>Node.Js</p>
              <p>MongoDB</p>
            </div>
            <div className="ecommerce">
              <p className='titre'>E-COMMERCE</p>
              <p>Wordpress </p>
              <p>WooCommerce</p>
            </div>
            <div className="versionning">
              <p className='titre'>VERSIONNING</p>
              <p>Git</p>
              <p>Github</p>

            </div>
          </div>
        </div>
        <div className="codeQR"></div>
      </div>
    </div>
  )
}

export default Biographie