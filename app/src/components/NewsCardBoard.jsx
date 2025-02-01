import NewsCard from './NewsCard.jsx';

//todo:
//Create data storage class
//Then just create a loop to display them on the board

const NewsCardBoard = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap m-2">
                <NewsCard
                    title="ChatGPT"
                    description="This description is a standard sized description. Lorem ipsum or something like that you know?"
                />
                <NewsCard
                    title="DeepSeek"
                    description="This description describes the fact that DeepSeek released an OpenSource model named 'r1' that removed nearly $600 Billion from Nvidia's market cap!"
                />
            </div>
        </>
    );
};

export default NewsCardBoard;