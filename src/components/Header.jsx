import { useContext, useState } from "react";
import { ThemeContext, movieContext } from "../contexts";
import Moon from "./../assets/icons/moon.svg";
import Sun from "./../assets/icons/sun.svg";
import Logo from "./../assets/logo.svg";
import Ring from "./../assets/ring.svg";
import ShoppingCart from "./../assets/shopping-cart.svg";
import Cart from "./Cart";
const Header = () => {
    const [showCartModal, setShowCartModal] = useState(false);
    const { state, dispatch } = useContext(movieContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const handleShowModal = () => {
        setShowCartModal(false);
    };
    return (
        <>
            {showCartModal && <Cart onClose={handleShowModal} />}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={Logo} width={139} height={26} alt />
                    </a>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                            >
                                <img src={Ring} width={24} height={24} alt />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                {darkMode ? (
                                    <img src={Sun} width={24} height={24} alt />
                                ) : (
                                    <img
                                        src={Moon}
                                        width={24}
                                        height={24}
                                        alt
                                    />
                                )}
                                {/* <img src={Moon} width={24} height={24} alt /> */}
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                                href="#"
                                onClick={() => setShowCartModal(true)}
                            >
                                <img
                                    src={ShoppingCart}
                                    width={24}
                                    height={24}
                                    alt
                                />
                                {state.cartData.length > 0 && (
                                    <span className="bg-primary inline-block rounded-full size-6 text-center absolute -right-4 -top-2">
                                        {state.cartData.length}
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
