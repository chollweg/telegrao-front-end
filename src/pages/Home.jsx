import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Home(){

  
  const baseURL = 'https://chat-crng.onrender.com/entrar'

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')

  

  const handleGoSalas = async () => {
    const req = await axios.post(baseURL, {
      nick: firstName
    })
    const resp = req.data
    const token = resp.token
    const idUser = resp.idUser
    const nick = resp.nick
    localStorage.setItem("token", token)
    localStorage.setItem("idUser", idUser);
    localStorage.setItem("nick", nick);
    console.log(resp);
    navigate('/salas')
  }
  
    return (
        <>
      <div>
        <div className="bg-primary">
          <h1 className="text-center p-4 font-bold">Telegrão</h1>
        </div>
        <div className="flex flex-col w-2/5 mt-2 ml-auto mr-auto items-center gap-2 p-7 border border-indigo-600 rounded-xl">
          <label>Nome</label>
          <input className="rounded-xl p-1" type="text" name="nomeInput" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
          <button className="rounded-xl bg-terciary p-3 hover:text-white bg-red-500" onClick={handleGoSalas}>Entrar</button>
        </div>
     </div>
    </>
    )
}

export default Home;