import { useState, useEffect } from 'react';
import NewsCard from './NewsCard.jsx';
import NewsData from './NewsData.js';

const NewsCardBoard = () => {
    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    
    useEffect(() => {
        // Sort news by date (most recent first)
        const sortedNews = [...NewsData].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        
        setNews(sortedNews);
    }, []);
    
    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, news.length));
    };

    return (
        <div className="space-y-2">
            {news.slice(0, visibleCount).map(item => (
                <NewsCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    source={item.source}
                    date={item.date}
                    url={item.url}
                />
            ))}
            
            {visibleCount < news.length && (
                <button 
                    onClick={loadMore}
                    className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm transition-colors mt-2"
                >
                    Show More News
                </button>
            )}
        </div>
    );
};

export default NewsCardBoard;