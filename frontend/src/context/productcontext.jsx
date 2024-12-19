// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";


const AppContext = createContext();



const API = "http://localhost:5000/api/cups";
const API_SINGLE = "http://localhost:5000/api/cups/custom"; // To ensure custom route


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING" });
    try {
        const res = await axios.get(url);
        const products = await res.data; 
        dispatch({type: "SET_API_DATA", payload: products });
    } catch (error) {
        dispatch({type: "API_ERROR" });
    }
    };

// calling api call for single product

const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
        //const res = await axios.get(url);
        const res = await axios.get(`${API_SINGLE}/${id}`); // Fetch single product
        const singleProduct = await res.data; 
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
        dispatch({ type: "SET_SINGLE_ERROR" })

    }
};

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
    );
};

// custom hooks 
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };