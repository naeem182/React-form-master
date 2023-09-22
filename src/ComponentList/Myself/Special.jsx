import { useContext } from "react"
import { AssetContex } from "../Grandpa"


const Special = ({ asset }) => {
    const gift = useContext(AssetContex)
    return (
        <div>
            <h2>special</h2>
            <p>has achived:{asset}</p>
            <p>also has:{gift}</p>
        </div>
    )
}

export default Special
