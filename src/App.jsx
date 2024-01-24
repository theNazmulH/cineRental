import { useReducer, useState } from "react";
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
            </movieContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
