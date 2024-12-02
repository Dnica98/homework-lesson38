import { useNavigate } from "react-router-dom";
import Typography from "../Typography";
import './styles.css';
import Icon from '../Icon';
import { useState } from "react";
import Input from "../Input";

const Card = ({ title, img, price, id, iconOnClick }) => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState(1)

    const handleClick = () => {
        navigate(`/product/${id}`)
    }

    const handleChangeAmount = (option) => {

    if(option === 'ADD') {
        setAmount((prevState) => {
            return prevState + 1
        })
    } else {
        setAmount((prevState) => {
            return prevState > 1 ? prevState - 1 : 1;
        })
    }

    }

    return (
        <div className="card-wrapper" onClick={handleClick}>
            <img src={img} alt={`${title} image`} className="card-img" />
            <Typography>{title}</Typography>
            <Typography>{price} $</Typography>

            <div onClick={(e) => e.stopPropagation()} className="card-input">
                <div onClick={handleChangeAmount}>
                    <Icon name="minus" size="sm" />
                </div>
                <Input type="number" value={amount} onChange={setAmount} />
                <div onClick={() => handleChangeAmount('ADD')}>
                    <Icon name="add" size="sm" />
                </div>
            </div>

            <div onClick={(e) => {
                e.stopPropagation()
                iconOnClick(amount)
                setAmount(1)
            }}>
                <Icon name="cart" size='lg' />
            </div>
        </div>
    )
}

export default Card;