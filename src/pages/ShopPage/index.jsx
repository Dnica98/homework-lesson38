import { useContext, useEffect, useState } from "react";
import Card from '../../Components/Card';
import Typography from '../../Components/Typography';

import './styles.css'
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cartContext";

const ShopPage = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {handleAddToCard}= useContext(CartContext)
    const [showBanner, setShowBanner] =useState(false)


    useEffect(() => {
        getProducts()
    }, [])

    const handleAction = (item) => {
        handleAddToCard(item)
        setShowBanner(true)

        setTimeout(() => {
            setShowBanner(false)
        }, 1000)
    }
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
                        iconOnClick={(amount) => handleAction({title, price, img, id, amount})}
                    />
                })}
            </div>
            {showBanner && (
                <div className="banner">
                Item eas succesfully added to your cart!
                </div>
            ) }
        </div>
    )
}

export default ShopPage;