import { useContext, useEffect } from "react";
import Card from '../../Components/Card';
import Typography from '../../Components/Typography';

import './styles.css'
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cartContext";

const ShopPage = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {handleAddToCard}= useContext(CartContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Typography>Shop</Typography>
            <div className="product-list">
                {products.map(({ title, price, img, id }) => {
                    return <Card
                        key={title}
                        title={title}
                        price={price}
                        img={img}
                        id={id}
                        iconOnClick={(amount) => handleAddToCard({title, price, img, id, amount})}
                    />
                })}
            </div>
        </div>
    )
}

export default ShopPage;