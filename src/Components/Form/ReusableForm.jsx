

const ReusableForm = ({ formtitle, handlefun, btnTitle = 'Submit', children }) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.pass.value
        }
        handlefun(data);
    }

    return (
        <div>
            <h2>{formtitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Name" /><br />
                <input type="email" name="email" placeholder="e-mail" /><br />
                <input type="password" name="pass" placeholder="pass" /><br />

                <input type="submit" value={btnTitle} />

            </form>
        </div>
    )
}

export default ReusableForm
