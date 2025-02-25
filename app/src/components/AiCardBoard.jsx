import { useState, useEffect } from 'react';
import AiCard from './AiCard.jsx';
import AiDetailModal from './AiDetailModal.jsx';
import AiModelsData from './AiModelsData.js';

const AiCardBoard = ({ sortOption = 'popularity', activeFilters = [], searchQuery = '' }) => {
    const [filteredModels, setFilteredModels] = useState(AiModelsData);
    const [selectedModel, setSelectedModel] = useState(null);
    
    const handleSelectModel = (modelId) => {
        const model = AiModelsData.find(m => m.id === modelId);
        setSelectedModel(model);
    };
    
    const handleCloseModal = () => {
        setSelectedModel(null);
    };

    // Apply sorting, filtering, and search whenever props change
    useEffect(() => {
        let result = [...AiModelsData];
        
        // Apply filtering
        if (activeFilters.length > 0) {
            result = result.filter(model => 
                activeFilters.includes(model.category?.toLowerCase())
            );
        }
        
        // Apply search
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(model => 
                model.title.toLowerCase().includes(query) || 
                (model.description && model.description.toLowerCase().includes(query))
            );
        }
        
        // Apply sorting
        switch (sortOption) {
            case 'popularity':
                result.sort((a, b) => (b.monthlyActiveUsers || 0) - (a.monthlyActiveUsers || 0));
                break;
            case 'recent':
                result.sort((a, b) => {
                    if (!a.lastUpdated) return 1;
                    if (!b.lastUpdated) return -1;
                    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
                });
                break;
            case 'alphabetical':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }
        
        setFilteredModels(result);
    }, [sortOption, activeFilters, searchQuery]);

    return (
        <>
            {selectedModel && (
                <AiDetailModal 
                    model={selectedModel} 
                    onClose={handleCloseModal} 
                />
            )}
            
            {filteredModels.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13h.01" />
                        </svg>
                        <p className="mt-4 text-xl">No AI models found matching your criteria</p>
                        <p className="mt-2">Try adjusting your filters or search term</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row flex-wrap justify-center md:justify-start">
                    {filteredModels.map(model => (
                        <AiCard
                            key={model.id}
                            id={model.id}
                            title={model.title}
                            modelCount={model.modelCount}
                            monthlyActiveUsers={model.monthlyActiveUsers}
                            thumbnail={model.thumbnail}
                            category={model.category}
                            description={model.description}
                            lastUpdated={model.lastUpdated}
                            onSelect={handleSelectModel}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default AiCardBoard;