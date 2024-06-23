import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { PizzasContext } from "../context/PizzaProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
    const { carrito, formatToCLP, total, increment, decrement } = useContext(PizzasContext);

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container p-5">
                <ListGroup className="bg-light p-5">
                    <h5>Detalles del pedido:</h5>
                    <div className="container p-3 bg-white">
                        {/* el index siempre es el segundo parámetro del método map() */}
                        {carrito.map((prods, index) => (
                            <ListGroup.Item className="p-0 border-0">
                                <div className="py-2 d-flex justify-content-between"
                                    style={{ borderBottom: "1px solid olivedrab" }}>
                                    <div className="d-flex hover" onClick={() => navigate(`/pizza/${prods.id}`)}>
                                        <div>
                                            <img src={prods.img} alt={prods.name} className="imgCarrito" />
                                        </div>
                                        <div className="ms-3 d-flex flex-column justify-content-center">
                                            <h6 className="text-capitalize">Pizza {prods.name}</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="mb-0 p-2 text-success">
                                                {formatToCLP(prods.price * prods.count)}
                                            </h6>
                                        </div>
                                        <div>
                                            <Button variant="danger" onClick={() => decrement(index)}><b>-</b></Button>
                                            <strong className="mx-3">{prods.count}</strong>
                                            <Button variant="primary" onClick={() => increment(index)}><b>+</b></Button>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item className="pt-4 px-0 border-0">
                            <h3>Total: {formatToCLP(total)}</h3>
                            <Button variant="success" >Ir a Pagar</Button>
                        </ListGroup.Item>
                    </div>
                </ListGroup>
            </div>
        </div>
    );
};

export default Carrito;