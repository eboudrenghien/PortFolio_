// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
import React, { useContext, useState } from 'react';
import axios from "axios"

function Write() {
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    const [file, setFile] = useState(null)
    // const { user } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            titre,
            contenu,
            // pseudo: user.pseudo
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/actualites/upload", data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.post("/posts/actualites/", newPost)
            window.location.replace("/actualites/" + res.data._id)
        } catch (err) { 
            console.log(err,"fail");
        }
    }
    return (
        <div className="write">
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    {file && (
                        <img className="writeImg"
                            src={URL.createObjectURL(file)}
                            alt=""
                        />)}
                    <label htmlFor="photo"><i className="icon fa-solid fa-plus" style={{ width: "25px" }}></i></label>
                    <input type="file" name="ajouter une photo" id="photo" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input className='writeTitle' name="articleTitre" type="text" placeholder='Saisir un titre' autoFocus={true} autoComplete="off" onChange={e => setTitre(e.target.value)} />
                </div>
                <div className="formGroup">
                    <textarea placeholder='Saisir un texte' name="" className="writeInput" autoComplete='off' onChange={e => setContenu(e.target.value)} ></textarea>
                </div>
                <button type="submit" className='submit' name="envoyer">ENVOYER</button>

            </form>
        </div>
    )
}

export default Write