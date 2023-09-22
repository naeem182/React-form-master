import React from 'react'
import UseInputState from './UseInputState';

const HookForm = () => {

    // const [name, handleChangeName] = UseInputState('NAEEM')
    const emailState = UseInputState('naeem@islam')

    const handleSubmit = (event) => {
        console.log(emailState.value)
        event.preventDefault();


    }
    // const handleSubmit = (event) => {
    //     console.log(name)
    //     event.preventDefault();


    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChangeName} type="text" name="name" placeholder="Name" /><br /> */}
                <input {...emailState} type="email" name="email" placeholder="e-mail" /><br />
                <input type="password" name="pass" placeholder="pass" /><br />

                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default HookForm
