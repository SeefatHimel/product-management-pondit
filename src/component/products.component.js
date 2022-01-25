import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import Product from "./product.component";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((items) => setProducts(items));
    }, []);

    return (
        <>
            <h1>Hello</h1>
            <div style={{ marginLeft: "30%" , textAlign : 'center' , padding : '30px'}}>
                {products.map((product) => (
                    <Product  
                        title={product.title}
                        category={product.category}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
