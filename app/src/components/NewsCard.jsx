/* eslint-disable react/prop-types */

import Placeholder from "../assets/Placeholder.png";

const NewsCard = ({title, description, thumbnail}) => {
    return (
        <button className="flex flex-col m-4 rounded-lg">

            <p>{title}</p>
            <div className="border-2 rounded-lg p-2 shrink">
                <img src={thumbnail || Placeholder} alt={title || "placeholder"}/>
                <p className="">{description}</p>
            </div>
        </button>
    );
};

export default NewsCard;