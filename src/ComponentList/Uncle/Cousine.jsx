import Special from "../Myself/Special"


const Cousine = ({ name, asset }) => {
    return (
        <div>
            <h2>Cousine</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
            </section>
        </div>
    )
}

export default Cousine
