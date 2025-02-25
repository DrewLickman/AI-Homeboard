/* eslint-disable react/prop-types */
import Placeholder from "../assets/Placeholder.png";

const NewsCard = ({ title, description, thumbnail, source, date, url }) => {
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 bg-dark-800 rounded-lg overflow-hidden border border-cyber-magenta-300 shadow-neon-magenta hover:shadow-neon-magenta-strong transition-all duration-300 hover:scale-102"
        >
            <div className="relative h-32 overflow-hidden">
                <img
                    src={thumbnail || Placeholder}
                    alt={title || "news"}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-800/80"></div>

                {source && (
                    <div className="absolute top-2 left-2 bg-gradient-cyan-magenta text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-cyber-cyan-400 shadow-neon-cyan">
                        {source}
                    </div>
                )}
            </div>

            <div className="p-3 relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-cyan-100 blur-xl rounded-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber-magenta-100 blur-xl rounded-full -z-10"></div>

                <h3 className="font-semibold text-white mb-1 line-clamp-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-2 line-clamp-3">{description}</p>

                {date && (
                    <p className="text-xs text-cyan-400 italic">
                        {formatDate(date)}
                    </p>
                )}
            </div>
        </a>
    );
};

export default NewsCard;