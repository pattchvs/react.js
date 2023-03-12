import {useState} from 'react'



function Form(){

    function cadastrarUsuario(e){
        console.log('nome: ', name)
        console.log('senha: ', password)
        e.preventDefault()
        console.log('Cadastrou o usuário')
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()
    
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input type="text" id="name" placeholder="Insira o seu nome" onChange={(e)=> setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" placeholder="Digite a sua senha" onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}


export default Form