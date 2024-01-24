/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { movieContext } from "../contexts";
import { getImgUrl } from "../utils/cine-utility";
import Tag from "./../assets/tag.svg";
import Modal from "./Modal";
import Ratings from "./Ratings";

const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { cartData, setCartData } = useContext(movieContext);
    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };
    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };
    const handleAddToCart = (movie) => {
        const found = cartData.find((item) => {
            return item.id === movie.id;
        });
        if (!found) {
            setCartData([...cartData, movie]);
        }
    };
    return (
        <>
            {showModal && (
                <Modal movie={selectedMovie} onClose={handleModalClose} />
            )}

            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img
                        className="w-full object-cover"
                        src={getImgUrl(movie.cover)}
                        alt={movie.title}
                    />
                </a>
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <Ratings rating={movie.rating} />
                    <a
                        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                        onClick={() => handleAddToCart(movie)}
                    >
                        <img src={Tag} alt />
                        <span> $ {movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
};

export default MovieCard;
