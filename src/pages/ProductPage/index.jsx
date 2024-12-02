import { useParams } from "react-router-dom";
import Typography from '../../Components/Typography';

import './styles.css'
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const ProductPage = () => {
    const param = useParams()
    const {getProduct} = useContext(ProductContext)

    const product = getProduct(param.id)

    if(!product) {
        return <div>product not found</div>
    }

    
    return(
        <div className="product-page">
            <div className="product-page-img">
                <img src={product.img} />
            </div>
            <div className="product-page-details">
                <Typography>{product.title}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.price}</Typography>
            </div>
        </div>
    )
}

export default ProductPage;