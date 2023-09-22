

const SimpleForm = () => {

    const handleSubmit = (event) => {

        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.num.value)
    }
    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" /><br />
                <input type="email" name="email" placeholder="e-mail" /><br />
                <input type="number" name="num" placeholder="num" /><br />

                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default SimpleForm
