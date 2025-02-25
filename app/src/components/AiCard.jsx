/* eslint-disable react/prop-types */
import { useState } from 'react';
import Placeholder from "../assets/Placeholder.png";

const AiCard = ({
    id,
    title,
    modelCount,
    monthlyActiveUsers,
    thumbnail,
    category,
    description,
    lastUpdated,
    onSelect
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Get appropriate category badge class
    const getCategoryBadgeClass = (category) => {
        switch (category?.toLowerCase()) {
            case 'chat': return 'cyber-badge-cyan';
            case 'voice': return 'cyber-badge-magenta';
            case 'images': return 'cyber-badge-magenta';
            case 'video': return 'cyber-badge-magenta';
            case '3d': return 'cyber-badge-yellow';
            case 'specialized': return 'cyber-badge-yellow';
            default: return 'cyber-badge-cyan';
        }
    };

    return (
        <div
            className={`m-4 rounded-lg overflow-hidden transition-all duration-300 ${isHovered
                    ? 'transform scale-105 shadow-neon-cyan-strong'
                    : 'shadow-neon-cyan'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-64 bg-dark-800 rounded-lg border border-cyber-cyan-300 relative group">
                {/* Glow effects */}
                <div className="cyber-glow-effect">
                    <div className="cyber-glow-cyan"></div>
                    <div className="cyber-glow-magenta"></div>
                </div>

                {/* Image container */}
                <div className="h-40 overflow-hidden relative">
                    <img
                        src={thumbnail || Placeholder}
                        alt={title || "placeholder"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-800/80"></div>

                    {/* Category badge */}
                    {category && (
                        <span className={`absolute top-2 right-2 ${getCategoryBadgeClass(category)}`}>
                            {category}
                        </span>
                    )}
                </div>

                {/* Content section */}
                <div className="p-4">
                    <h3 className="cyber-heading text-xl mb-1">{title}</h3>

                    {description && (
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {description}
                        </p>
                    )}

                    <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            {modelCount} {modelCount > 1 ? "Models" : "Model"}
                        </span>

                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {formatDate(lastUpdated)}
                        </span>
                    </div>

                    {/* Users indicator */}
                    {monthlyActiveUsers > 0 && (
                        <div className="mt-3 bg-gradient-to-r from-cyber-cyan-900 to-cyber-magenta-900 border border-cyber-cyan-300 p-2 rounded-md text-center backdrop-blur-sm">
                            <span className="font-medium bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                {monthlyActiveUsers}M monthly users
                            </span>
                        </div>
                    )}

                    {/* Hover action */}
                    <div className={`mt-3 text-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <button
                            onClick={() => onSelect(id)}
                            className="cyber-button-gradient"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiCard;