import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer"


const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    //shipping_fee: 500,
};

const CartProvider = ({ children }) => {

    
    const [state, dispatch] = useReducer(reducer, initialState)

   const addToCart = (id, amount, product) => {
    dispatch({ type:"ADD_TO_CART", payload: { id, amount, product }})
   };

 return <CartContext.Provider value= {{...state, addToCart }}>
    {children}
 </CartContext.Provider>;
};
const useCartContext = () => {
    return useContext(CartContext);
}
 
export { CartProvider, useCartContext };