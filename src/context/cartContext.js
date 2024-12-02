import { createContext, useState } from "react";




export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const handleAddToCard = (newItem) => {
        const isNewItem = cartList.some((item) => item.id === newItem.id)
        if (isNewItem) {
            setCartList((prevState) => {
                return prevState.map((product) => {
                    return {
                        ...product,
                        amount: product.id === newItem.id
                            ? product.amount + newItem.amount
                            : product.amount
                    }
                })
            })
        } else {
            setCartList([...cartList, { ...newItem}])
        }

      
    }

    
    const modifyCartList = (modifiedItem) => {
        setCartList((prevState) => {
            return prevState.map((item) => {
                return { ...item, amount: item.id === modifiedItem.id ? modifiedItem.amount : item.amount }
            })
        })
    }

    const deleteItem = (id) => {
        setCartList((prevState) => {
            return prevState.filter((item) => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{ cartList, handleAddToCard, deleteItem, modifyCartList}}>
            {children}
        </CartContext.Provider>
    )
}