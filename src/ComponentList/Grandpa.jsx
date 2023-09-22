import Aunty from "./Aunty"
import Dad from "./Dad"
import Uncle from "./Uncle"
import './Grandpa.css'


const Grandpa = () => {
    return (
        <div className="grandpa">
            <div>
                <h2>Grandpa</h2>
                <section className="flex">
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </div>
        </div>
    )
}

export default Grandpa
