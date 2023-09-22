import Brother from "./Dad/Brother"
import Myself from "./Dad/Myself"
import Sister from "./Dad/Sister"

const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex" >
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    )
}

export default Dad
