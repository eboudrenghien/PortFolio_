// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import axios from 'axios'

function Settings() {
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [file, setFile] = useState(null)
    const [success, setSuccess] = useState(false)


    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START" })
        const updateUser = {
            userId: user._id,
            pseudo,
            email,
            mdp,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updateUser.profilPP = filename
            try {
                await axios.post("/upload", data)
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updateUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }



    return (
        <div className='settings'>
            <div className='position'>

                <form className="settingsForm" onSubmit={handleSubmit}>
                    <div className="settingsTitre">
                        <span className="settingsUpdateTitre">Profil</span>
                        {/* <span className="settingsDeleteTitre" onClick={handleDelete} style={{ cursor: "pointer" }}>Supprimer le compte</span> */}
                    </div>
                    {/* <label>Photo de profil</label> */}
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilPP} alt="" style={{ width: "200px", borderRadius: "10px" }} />

                        <label htmlFor="fileInput">
                            <i class="fa-solid fa-file iconPP"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />

                    </div>
                    <div className="settingsInfo" >
                        <label htmlFor="">PSEUDO</label>
                        <input type="text" placeholder={user.pseudo} autoComplete="off" onChange={e => setPseudo(e.target.value)} required />
                        <label htmlFor="">EMAIL</label>
                        <input type="email" placeholder={user.email} name="email" id="email" autoComplete="off" onChange={e => setEmail(e.target.value)} required />
                        <label htmlFor="">MOT DE PASSE</label>
                        <input type="password" onChange={e => setMdp(e.target.value)} required />
                        <button className="settingsSubmit" type='submit'>ENVOYER</button>
                        {success && <span style={{ color: "green" }}>Votre profil a été mis à jour !</span>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings