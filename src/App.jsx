import { useState } from "react";
import Home from "./Home";
import { movieContext } from "./contexts";

function App() {
    const [cartData, setCartData] = useState([]);
    console.log("cart data", cartData);
    return (
        <movieContext.Provider value={{ cartData, setCartData }}>
            <Home />
        </movieContext.Provider>
    );
}

export default App;
