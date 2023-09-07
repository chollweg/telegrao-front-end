
function Home(){
    return (
        <>
      <div>
        <div className="bg-primary">
          <h1 className="text-center p-4 font-bold">Telegrão</h1>
        </div>
        <div className="flex flex-col w-2/5 mt-2 ml-auto mr-auto items-center gap-2 p-7 border border-indigo-600 rounded-xl">
          <label>Nome</label>
          <input className="rounded-xl p-1" type="text" name="nomeInput"></input>
          <button className="rounded-xl bg-terciary p-3 hover:text-white bg-red-500">Entrar</button>
        </div>
     </div>
    </>
    )
}

export default Home;