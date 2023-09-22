import { useState } from "react"


const UseInputState = (defaultValue = null) => {
    const [value, setvalue] = useState(defaultValue);

    const onChange = e => {

        setvalue(e.target.value);
    }
    // const handleChange = e => {

    //     setvalue(e.target.value);
    // }
    // return [value, handleChange]
    return {
        value,
        onChange
    }
}

export default UseInputState
