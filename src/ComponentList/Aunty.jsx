import { useContext } from "react"
import Cousine from "./Uncle/Cousine"
import { MoneyContex } from "./Grandpa"


const Aunty = () => {
    const [money] = useContext(MoneyContex)
    return (
        <div>
            <h2>Aunty</h2>
            <p>m0ney:{money}</p>
            <section className="flex">

                <Cousine name={'Nipa'}></Cousine>
                <Cousine name={'srity'}></Cousine>

            </section>

        </div>
    )
}

export default Aunty
