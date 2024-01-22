import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieLists from "./components/MovieLists";
import Sidebar from "./components/Sidebar";

const Home = () => {
    return (
        <div className={`h-full w-full`}>
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
