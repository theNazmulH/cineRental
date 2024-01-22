import Star from "../assets/star.svg";
const Ratings = () => {
    return (
        <div className="flex items-center space-x-1 mb-5">
            <img src={Star} width={14} height={14} alt />
            <img src={Star} width={14} height={14} alt />
            <img src={Star} width={14} height={14} alt />
            <img src={Star} width={14} height={14} alt />
        </div>
    );
};

export default Ratings;
