import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "./components/CartItem";


const CartPage =() => {
    const { cartList, deleteItem, modifyCartList } = useContext(CartContext)

    const totalPrice = cartList.reduce((acc,curr)=>{
        const total = curr.amount * Number(curr.price)
        return Number(acc) + total;
    }, 0)


    return <div >
        <h3>Your Cart</h3>
        <ul >
            {cartList.map(({id, title, price, amount}) => {
                return <CartItem 
                key={id}
                removeAction={deleteItem}
                onChangeAction={modifyCartList}
                id={id}
                title={title}
                price={price}
                amount={amount}
                 />
              
            })}
        </ul>

        <h3>Total Price: {totalPrice.toFixed(2)} $</h3>
    </div>
}


export default CartPage;