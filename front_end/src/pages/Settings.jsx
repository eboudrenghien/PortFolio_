import React from 'react'
import PhotoDeProfil from '../styles/assets/krafou2.jpg'
function Settings() {
  
    return (
        <div className='settings'>
            <div className='position'>
                
                <form className="settingsForm">
                     <div className="settingsTitre">
                            <span className="settingsUpdateTitre">Profil</span>
                            <span className="settingsDeleteTitre">Supprimer le compte</span></div>
                    {/* <label>Photo de profil</label> */}
                    <div className="settingsPP">
                        <img src={PhotoDeProfil} alt="chat" style={{ width: "200px", borderRadius: "10px" }} />
                       
                            <label htmlFor="fileInput">
                                <i classname="iconPP fa-solid fa-image-portrait" title='choisir une image' ></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        
                    </div>
                    <div className="settingsInfo">
                        <label htmlFor="">PSEUDO</label>
                        <input type="text" placeholder='guibert.dupont' autoComplete="off" />
                        <label htmlFor="">EMAIL</label>
                        <input type="email" placeholder='g.dupont@gmail.com' name="email" id="email" autoComplete="off" />
                        <label htmlFor="">MOT DE PASSE</label>
                        <input type="password" />
                        <button className="settingsSubmit">ENVOYER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings