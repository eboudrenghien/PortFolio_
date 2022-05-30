import React from 'react'

function Write() {
    return (
        <div className="write">
            <form action="/actualites" method='post' className="writeForm">
                <div className="formGroup">
                    <label htmlFor="photo"><i class="icon fa-solid fa-plus" style={{ width: "25px" }}></i></label>
                    <input type="file" name="ajouter une photo" id="photo" style={{ display: "none" }} />
                    <input className='writeTitle'name="articleTitre" type="text" placeholder='Saisir un titre' autoFocus={true} autoComplete={true} />
                </div>
                <div className="formGroup">
                    <textarea placeholder='Saisir un texte' name="" className="writeInput" ></textarea>
               </div>
                <button type="submit" className='submit'>ENVOYER</button>
             
            </form>
        </div>
    )
}

export default Write