import { useState } from "react";
import Home from "./Home";
import { ThemeContext, movieContext } from "./contexts";

function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <movieContext.Provider value={{ cartData, setCartData }}>
                <Home />
            </movieContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
