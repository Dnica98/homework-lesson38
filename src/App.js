import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from './constants';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import NotFound from './pages/NotFound';
import NavigationBar from "./pages/NavigationBar";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/productContext";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div >
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path={path.homePage} element={<HomePage/>} />
              <Route path={path.shopPage} element={<ShopPage/>} />
              <Route path={path.product} element={<ProductPage/>} />
              <Route path={path.cart} element={<CartPage/>}/>
              <Route path={path.notFound} element={<NotFound/>} />
            </Routes>
          </BrowserRouter>  
        </CartProvider>    
      </ProductProvider>
    </div>
  );
}

export default App;
