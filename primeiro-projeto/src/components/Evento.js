import Button from "./Button"
function Evento({numero}){

    function meuEvento(){
        console.log(`Fui ativado`)
    }

    function segundoEvento(){
        console.log("segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </div>
    )
}

export default Evento