import AiCard from './AiCard.jsx';
import AiModelsData from './AiModelsData.js';

//todo:
//Create data storage class
//Then just create a loop to display them on the board

const AiCardBoard = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap m-2">
                {AiModelsData.map(model => (
                    <AiCard
                        key={model.id}
                        title={model.title}
                        modelCount={model.modelCount}
                        monthlyActiveUsers={model.monthlyActiveUsers}
                        thumbnail={model.thumbnail}
                    />
                ))}
            </div>
        </>
    );
};

export default AiCardBoard;