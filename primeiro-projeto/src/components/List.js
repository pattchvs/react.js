import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca= "Ferrari" ano_lancamento={1994} />
                <Item marca= "Fiat" ano_lancamento={1964}/>
                <Item/>

            </ul>
        </>
    )
}

export default List