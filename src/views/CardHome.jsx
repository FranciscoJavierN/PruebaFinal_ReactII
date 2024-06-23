import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";

const CardHome = () => {
    const { formatToCLP, pizzas, addToCart } = useContext(PizzasContext);

    const navigate = useNavigate();

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-lg-4 col-xl-3 col-md-6 mb-5 d-flex justify-content-center" key={pizza.id}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                                <Card.Body>
                                    <h4 className="text-capitalize">Pizza {pizza.name}</h4>
                                    <hr></hr>

                                    <div>
                                        <h5>
                                            <strong>Ingredientes:</strong>
                                        </h5>
                                        <ul>
                                            {pizza.ingredients.map((ingredient, i) => (
                                                <li key={i} className="text-capitalize">{ingredient}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-center p-3">
                                    <div className="p-2">
                                        <h3>{formatToCLP(pizza.price)}</h3>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <Button variant="success" className="text-light"
                                            // onClick={() => handlePizzaDetail(pizza.id)}>
                                            onClick={() => navigate(`/pizza/${pizza.id}`)}>
                                            Ver Más 👀
                                        </Button>
                                        <Button variant="outline-danger"
                                            onClick={() => addToCart(pizza)}>Añadir 🛒</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardHome;