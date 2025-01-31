/* eslint-disable react/prop-types */
//Template for AiCardBoard.jsx
import React from 'react';
import Placeholder from "../assets/Placeholder.png";

const AiCard = ({title, modelCount, monthlyActiveUsers, thumbnail}) => {
    return (
        <button className="flex flex-col m-4 rounded-lg">
            <p className="self-center ">{title}</p>
            <div className="border-2 rounded-lg p-2 shrink">
                <img src={thumbnail || Placeholder} alt={title || "placeholder"}/>
                <p>{modelCount} {modelCount > 1 ? "Models" : "Model"}</p>
                <p>{monthlyActiveUsers}M monthly users</p>
            </div>
        </button>
    );
};

export default AiCard;