import Aunty from "./Aunty"
import Dad from "./Dad"
import Uncle from "./Uncle"
import './Grandpa.css'
import { createContext, useState } from "react"
export const AssetContex = createContext('gold');
export const MoneyContex = createContext(1000)


const Grandpa = () => {
    const asset = 'Diamond';
    const [money, setmoney] = useState(1000)
    return (
        <div className="grandpa">
            <div>
                <h2>Grandpa</h2>
                <button onClick={() => setmoney(money + 1000)}>add 1000</button>
                <p>money:{money}</p>
                <MoneyContex.Provider value={[money, setmoney]}>
                    <AssetContex.Provider value="gold">
                        <section className="flex">
                            <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </section>
                    </AssetContex.Provider>
                </MoneyContex.Provider>
            </div>
        </div>
    )
}

export default Grandpa
