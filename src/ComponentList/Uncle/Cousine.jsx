import Friend from "../Friend"
import Special from "../Myself/Special"


const Cousine = ({ name, asset }) => {
    return (
        <div>
            <h2>Cousine</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Nipa' && <Friend></Friend>}
            </section>
        </div>
    )
}

export default Cousine
