import CardHome from "./CardHome";

const Home = () => {

    return (
        <>
            <div className="bannerHome text-white">
                <h1>¡Pizzería Mamma Mia!</h1>
                <p className="text-center pb-4 border-bottom w-50">
                    ¡Tenemos las mejores pizzas que podrás encontrar!
                </p>
            </div>
            <CardHome />
        </>
    );
};

export default Home;