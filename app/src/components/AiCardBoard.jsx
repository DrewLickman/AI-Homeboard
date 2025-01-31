/* eslint-disable react/prop-types */
import React from 'react';
import AiCard from './AiCard.jsx';

//todo:
//Create data storage class
//Then just create a loop to display them on the board

const AiCardBoard = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap m-2">
                <AiCard
                    title="ChatGPT"
                    modelCount={6}
                    monthlyActiveUsers={180}
                />
                <AiCard
                    title="Claude"
                    modelCount={4}
                    monthlyActiveUsers={20}
                />
                <AiCard
                    title="DeepSeek"
                    modelCount={6}
                    monthlyActiveUsers={180}
                />
                <AiCard
                    title="Bing Image Creator"
                    modelCount={4}
                    monthlyActiveUsers={20}
                />
                <AiCard
                    title="Midjourney"
                    modelCount={6}
                    monthlyActiveUsers={180}
                />
                <AiCard
                    title="Qwen"
                    modelCount={4}
                    monthlyActiveUsers={20}
                />
                <AiCard
                    title="Mistral"
                    modelCount={6}
                    monthlyActiveUsers={180}
                />
                <AiCard
                    title="Ollama"
                    modelCount={4}
                    monthlyActiveUsers={20}
                />
                <AiCard
                    title="ImageGen"
                    modelCount={6}
                    monthlyActiveUsers={180}
                />
                <AiCard
                    title="Grok"
                    modelCount={4}
                    monthlyActiveUsers={20}
                />
            </div>
        </>
    );
};

export default AiCardBoard;