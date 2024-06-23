import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PizzaCard = () => {
    let { id } = useParams();
    const [singlePizza, setSinglePizza] = useState({});
    const { formatToCLP, pizzas, addToCart } = useContext(PizzasContext);

    const getPizza = () => {
        const dataPizza = pizzas.find((pizza) => pizza.id === id);
   
        setSinglePizza(dataPizza || {});
    };

    useEffect(() => {
        getPizza();
    }, [pizzas, id]);

    return (
        <Card className="mt-5 mx-auto flex-row">
            <Card.Img src={singlePizza.img} style={{ width: "40%" }} />
            <Card.Body>
                <Card.Title className="fw-bold text-capitalize">
                    Pizza {singlePizza.name}
                </Card.Title>
                <hr></hr>
                <Card.Text>{singlePizza.desc}</Card.Text>
                <h5>Ingredientes:</h5>
                <ul className="text-left">
                    <Card.Text>
                        {singlePizza.ingredients?.map((ingredient, i) => (
                            <li key={i} className="text-capitalize">
                                {ingredient}
                            </li>
                        ))}
                    </Card.Text>
                </ul>
                <div className="d-flex justify-content-between p-2">

                    {/* <h3>{formatToCLP(singlePizza.price)}</h3> */}
                    <div>
                        <h3>Precio: {formatToCLP(singlePizza.price)}</h3>
                    </div>
                    <div>
                        <Button
                            variant="outline-danger"
                            onClick={() => addToCart(singlePizza)}>Añadir 🛒</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};
export default PizzaCard;