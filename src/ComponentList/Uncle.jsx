import Cousine from "./Uncle/Cousine"


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousine name={'noman'}></Cousine>
                <Cousine name={'Abdullah'}></Cousine>
            </section>
        </div>
    )
}

export default Uncle
