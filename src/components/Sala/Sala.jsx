function Sala(props){
    return (
        <div className="flex flex-col bg-terciary p-3 rounded-md">
            <p className="font-bold">{props.titulo}</p>
            <p className="font-bold">{props.tipo}</p>
        </div>
    )
}

export default Sala