import Sala from '../components/Sala/Sala'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Salas(){

const baseURL = "https://chat-crng.onrender.com/salas"
const [salas, setSalas] = useState([]);
const [messages, setMessages] = useState([])
const nick = localStorage.getItem("nick");
const idUser = localStorage.getItem("idUser");
const token = localStorage.getItem("token")

const navigate = useNavigate()


const getSalas = () => {
    if(localStorage.getItem("token") === null){
        navigate('/')
    }

    axios.get(baseURL, {headers: {
        'nick': nick,
        'idUser': idUser,
        'token': token
    }}).then((result) => {
        console.log(result.data);
        setSalas(result.data)
    })
}   

useEffect(() => {
   getSalas()
}, [])


    return (
        <div className="flex">
            <div className="w-1/4 h-screen border-2 border-indigo-600 flex flex-col gap-1">
                {
                    salas.length > 0 ? salas.map((sala) => {
                        return (
                        // eslint-disable-next-line react/jsx-key
                        <Sala titulo={sala.nome} tipo={sala.tipo} evento={() => {
                            setMessages(sala.msgs)
                        }}/>
                        )
                    }) : ''
                }
            </div>
            <div className="w-3/4 border-2 border-indigo-600">
               {
                messages.length > 0 ? messages.map((message) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className='flex flex-col'>
                            <p>{message.msg}</p>
                            <p>{message.nick}</p>
                        </div>
                    )
                }) : ''
               } 
            </div>
        </div>
    )
}

export default Salas;