import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import { ThemeContext, movieContext } from "./contexts";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
    // const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <movieContext.Provider value={{ state, dispatch }}>
                <Home />
                <ToastContainer />
            </movieContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
