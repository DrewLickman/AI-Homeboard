import { useEffect, useRef } from 'react';
import Placeholder from "../assets/Placeholder.png";

const AiDetailModal = ({ model, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        // Handle closing when clicking outside
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        // Handle ESC key
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!model) return null;

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div
                ref={modalRef}
                className="futuristic-card w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            >
                {/* Modal content */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute inset-0 futuristic-grid-bg opacity-40 pointer-events-none"></div>

                {/* Header with close button */}
                <div className="flex justify-between items-start p-6 border-b border-opacity-30 border-cyan-500">
                    <div>
                        <h2 className="futuristic-heading text-2xl">{model.title}</h2>
                        <p className="text-gray-400">By <span className="futuristic-text-pink">{model.provider}</span></p>
                    </div>
                    <button
                        onClick={onClose}
                        className="futuristic-text-cyan hover:futuristic-text-magenta transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Image and quick stats */}
                    <div className="md:col-span-1">
                        <div className="aspect-square rounded-lg overflow-hidden mb-4 futuristic-border-cyan futuristic-glow-cyan">
                            <img
                                src={model.thumbnail || Placeholder}
                                alt={model.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="futuristic-card-magenta p-4 space-y-3">
                            <div>
                                <p className="text-sm futuristic-text-cyan">Category</p>
                                <p className="font-medium text-white capitalize">{model.category || "Unspecified"}</p>
                            </div>

                            <div>
                                <p className="text-sm futuristic-text-cyan">Available Models</p>
                                <p className="font-medium text-white">{model.modelCount}</p>
                            </div>

                            <div>
                                <p className="text-sm futuristic-text-cyan">Monthly Active Users</p>
                                <p className="font-medium text-white">{model.monthlyActiveUsers ? `${model.monthlyActiveUsers}M` : "Not reported"}</p>
                            </div>

                            <div>
                                <p className="text-sm futuristic-text-cyan">Last Updated</p>
                                <p className="font-medium text-white">{formatDate(model.lastUpdated)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description and features */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold futuristic-text-pink mb-2">About</h3>
                            <p className="text-gray-300">{model.description}</p>
                        </div>

                        {model.features && model.features.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold futuristic-text-pink mb-2">Key Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {model.features.map((feature, index) => (
                                        <li key={index} className="flex items-start futuristic-card-bg p-2 rounded-md futuristic-border-cyan">
                                            <span className="futuristic-text-cyan mr-2">✓</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Action buttons */}
                        <div className="pt-4 border-t border-opacity-30 border-cyan-500">
                            <div className="flex flex-wrap gap-3">
                                {model.website && (
                                    <a
                                        href={model.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="futuristic-button-gradient"
                                    >
                                        Visit Website
                                    </a>
                                )}

                                <button className="futuristic-button-cyan">
                                    Compare with Others
                                </button>

                                <button className="futuristic-button-magenta">
                                    Save to Favorites
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiDetailModal;