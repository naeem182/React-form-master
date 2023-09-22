import { useContext } from "react"
import { AssetContex } from "./Grandpa"


const Friend = () => {
    const gift = useContext(AssetContex)
    return (
        <div>
            <h2>has:{gift}</h2>
        </div>
    )
}

export default Friend
