import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        fetchPizzas();
    }, []);

    // Obtener las pizzas
    const fetchPizzas = async () => {
        const data = await fetch("pizzas.json");
        const res = await data.json();
        const newData = [];
        res.forEach((pizzas) => {
            newData.push({ ...pizzas, count: 0 });
        });
        setPizzas(newData);
    };

    const addToCart = ({ id, price, name, img }) => {
        const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };

        if (productoEcontradoIndex >= 0) {
            carrito[productoEcontradoIndex].count++;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

    /* es el obeto específico en este caso la pizza específica */
    const increment = (i) => {
        // console.log("index", carrito[i])
        carrito[i].count++;
        setCarrito([...carrito]);
    };

    const decrement = (i) => {
        // console.log("index", carrito[i])
        const { count } = carrito[i];
        if (count === 1) {
            carrito.splice(i, 2);
        } else {
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    };

    // Transformar precio en CLP
    const formatToCLP = (price) => {
        return price?.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
        });
    };

    return (
        <PizzasContext.Provider
            value={{
                pizzas,
                carrito,
                setCarrito,
                addToCart,
                total,
                increment,
                decrement,
                formatToCLP,
            }}
        >
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;