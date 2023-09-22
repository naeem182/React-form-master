import Cousine from "./Uncle/Cousine"


const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousine name={'Mizanur'} asset={asset}></Cousine>
                <Cousine name={'Bidut'}></Cousine>
            </section>
        </div>
    )
}

export default Uncle
