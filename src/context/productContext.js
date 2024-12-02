import { createContext, useState } from "react"


const productList = [
    {
        id: 1,
        description: 'description',
        title: 'tomato',
        price: '2.3',
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg'
    },
    {
        id: 2,
        title: 'cucumber',
        description: 'description',
        price: '1.3',
        img: 'https://www.kew.org/sites/default/files/styles/original/public/2021-03/photo-1605693681835-f6c2d1d07d81.jpg.webp?itok=TJEuga4f'
    },
    {
        id: 3,
        title: 'potato',
        description: 'description',
        price: '1',
        img: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg'
    },
    {
        id: 4,
        title: 'pork',
        description: 'description',
        price: '15',
        img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/LH/BJ/NN/163340884/pork-500x500.webp'
    }
]

const fetchData = () => {
    return new Promise((res) => res(productList))
}

export const ProductContext = createContext([])

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetchData().then(data => setProducts([...data]))
    }

    const getProduct = (id) => {
        return products.find((item) => Number(item.id) === Number(id))
    }

    return (
        <ProductContext.Provider value={{products, getProducts, getProduct}}>
            {children}
        </ProductContext.Provider>
    )
}