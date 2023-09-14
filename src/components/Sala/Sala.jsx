function Sala(props){

    return (
        <div className="flex flex-col bg-terciary p-3 rounded-md cursor-pointer" onClick={props.evento}>
            <p className="font-bold">{props.titulo}</p>
            {props.tipo === "privada" ? <p className="text-[#ff0000] font-bold">{props.tipo}</p> : <p className="text-[#50d71e] font-bold">{props.tipo}</p>}
        </div>
    )
}

export default Sala