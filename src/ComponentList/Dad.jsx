import Brother from "./Dad/Brother"
import Myself from "./Dad/Myself"
import Sister from "./Dad/Sister"

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex" >
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    )
}

export default Dad
