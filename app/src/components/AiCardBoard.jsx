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
                    modelCount={4}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Copilot"
                    modelCount={4}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Midjourney"
                    modelCount={6}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Qwen"
                    modelCount={13}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Mistral"
                    modelCount={3}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Llama"
                    modelCount={3}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="ImageGen"
                    modelCount={1}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Grok"
                    modelCount={2}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="DeepMind"
                    modelCount={2}
                    monthlyActiveUsers={0}
                />
                <AiCard
                    title="Gemini"
                    modelCount={3}
                    monthlyActiveUsers={0}
                />
            </div>
        </>
    );
};

export default AiCardBoard;