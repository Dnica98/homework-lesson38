import { useState } from "react";
import Input from "../../../Components/Input";
import './styles.css';

const CartItem = ({title, price, id, removeAction, amount, onChangeAction}) => {
    const [value, setValue] = useState(amount)
    
    const handleChange = (newValue) => {
        if(newValue < 1)  return ;
        setValue(newValue)
        onChangeAction(id, value)
        
    }
    
    return(
        <li className="list-item" >
            <p>{title}</p>
            <p>amount</p> <Input type="number" value={value} onChange={handleChange}/>
            <p>price: {Number(price*value).toFixed}</p>
            <button onClick={() => removeAction(id)}>Remove</button>
        </li>

    )

}

export default CartItem;