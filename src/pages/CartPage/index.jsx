import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Icon from "../../Components/Icon";
import Input from "../../Components/Input";


const CartPage =() => {
    const { cartList, deleteItem, modifyCartList } = useContext(CartContext)

    const getTotalPrice = () =>{
        return cartList.reduce((total, product) =>{
            return total + product.amount*Number(product.price)
        }, 0)
    }
    const handleChangeAmount = (product, option) => {
        const newAmount = option === "ADD" 
            ? product.amount + 1 
            : product.amount > 1 
            ? product.amount - 1 
            : 1;

        modifyCartList({ ...product, amount: newAmount });
      }

    return <div >
        <h3>Your Cart</h3>
        <ul >
            {cartList.map((product) => {
                const price = product.amount * Number(product.price)
                return (
                    <li key={product.id} >
                        
                        {product.title} price: {price.toFixed(2)}
                        <div onClick={(e) => e.stopPropagation()} className="cart-input">
                        <div onClick={() => handleChangeAmount(product, 'MINUS')}>
                             <Icon name="minus" size="sm" />
                         </div>
                         <Input type="number" 
                                value={product.amount} 
                                onChange={(e) => modifyCartList({...product, amount: Number(e.target.value) || 1 })} />
                            <div onClick={() => handleChangeAmount(product, 'ADD')}>
                        <Icon name="add" size="sm" />
                            </div>
                         </div>
                        <button onClick={() => deleteItem(product.id)} className="removeBtn">Remove</button>
                    </li>
                    
                )
            })}
        </ul>

        <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
    </div>
}


export default CartPage;