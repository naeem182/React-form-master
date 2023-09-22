import { useState } from "react";


const StatefulForm = () => {
    const [name, setname] = useState('naeem');
    const [mail, setmail] = useState(null);
    const [pass, setpass] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (pass.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('');
            console.log(name, mail, pass)


        }
    }
    const handleChangeName = e => {
        setname(e.target.value)

    }
    const handleChangeEmail = e => {
        setmail(e.target.value)


    }
    const handleChangePassword = e => {
        setpass(e.target.value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChangeName}
                    type="text" name="name" placeholder="Name" /><br />
                <input
                    onChange={handleChangeEmail}
                    type="email" name="email" placeholder="e-mail" /><br />
                <input
                    onChange={handleChangePassword}
                    type="password" name="pass" placeholder="pass" required /><br />

                <input onChange={handleChangePassword} type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    )
}

export default StatefulForm
