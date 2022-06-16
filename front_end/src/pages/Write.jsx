// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
import React, { useContext, useState } from 'react';
import axios from "axios"
import { Context } from '../context/Context';

function Write() {
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            pseudo: user.pseudo,
            titre,
            contenu,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)
            } catch (err) {

            }
        }
        try {
            const res = await axios.post("/posts/actualites/", newPost)
            window.location.replace("/actualites/" + res.data._id)
        } catch (err) {
            console.log(err, "fail");
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
                    <label htmlFor="photo"><ion-icon name="images-outline"></ion-icon></label>
                    <input type="file" name="ajouter une photo" id="photo" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="formGroupText">
                    <input className='writeTitre' name="articleTitre" type="text" placeholder='Saisir un titre' autoFocus={true} autoComplete="off" onChange={e => setTitre(e.target.value)} />


                    <textarea placeholder='Saisir un texte' name="" className="writeInput" autoComplete='off' onChange={e => setContenu(e.target.value)} cols={'50'} rows={'10'}></textarea>

                    <div className="buttonWriteSubmit">
                        <button type="submit" className='submit' name="envoyer">ENVOYER</button>
                    </div></div>
            </form>
        </div>
    )
}

export default Write