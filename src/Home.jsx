import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieLists from "./components/MovieLists";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./contexts";

const Home = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieLists />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
