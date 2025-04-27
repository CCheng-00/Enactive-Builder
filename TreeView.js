import React from 'react';

function TreeView({ 
  prompt, 
  explanationChain, 
  parallelTrains, 
  activeTrain, 
  setActiveTrain,
  findBlock,
  setActiveTab,
  trainOutputs
}) {
  // Helper function to handle clicking on a train
  const handleTrainClick = (trainId) => {
    setActiveTrain(trainId);
    
    // If this train has an explanation, switch to output tab
    if (trainOutputs[trainId]) {
      setActiveTab("output");
    }
  };

  // Helper function to render branch nodes
  const renderBranchNodes = (parentId, level = 1) => {
    const branchBlocks = parallelTrains[parentId] || [];
    if (branchBlocks.length === 0) return null;
    
    return (
      <ul className="pl-4 border-l border-gray-200 space-y-1">
        {branchBlocks.map(block => (
          <li key={block.id}>
            <button
              onClick={() => handleTrainClick(block.id)}
              className={`flex items-center text-xs py-1 px-2 rounded-md transition-colors 
                ${activeTrain === block.id 
                  ? 'bg-blue-100 text-blue-700 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <span className="mr-1">{block.icon}</span>
              <span className="truncate max-w-[140px]">{block.type}</span>
            </button>
            {/* Recursively render nested branches */}
            {renderBranchNodes(block.id, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-6">
      <div className="px-3 py-2 bg-gray-50 border-b">
        <h3 className="text-sm font-medium text-gray-700">Explanation Structure</h3>
      </div>
      <div className="p-2 max-h-[300px] overflow-y-auto">
        {/* Root node (prompt) */}
        <div className="mb-2">
          <div className="flex items-center text-sm font-medium text-gray-700 px-2 py-1">
            <span className="mr-1">🔍</span>
            <span className="truncate">{prompt || "No prompt yet"}</span>
          </div>
        </div>
        
        {/* Main chain */}
        <div className="space-y-1 pl-2">
          <button
            onClick={() => handleTrainClick("main")}
            className={`flex items-center text-xs py-1 px-2 rounded-md w-full transition-colors
              ${activeTrain === "main" 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <span className="mr-1">📝</span>
            <span>Main Chain</span>
            <span className="ml-1 text-xs text-gray-400">({explanationChain.length})</span>
          </button>
          
          {/* Render main blocks with their branches */}
          <ul className="pl-4 space-y-1 border-l border-gray-200">
            {explanationChain.map(block => (
              <li key={block.id}>
                <button
                  onClick={() => handleTrainClick(block.id)}
                  className={`flex items-center text-xs py-1 px-2 rounded-md transition-colors 
                    ${activeTrain === block.id 
                      ? 'bg-blue-100 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <span className="mr-1">{block.icon}</span>
                  <span className="truncate max-w-[140px]">{block.type}</span>
                  {parallelTrains[block.id]?.length > 0 && (
                    <span className="ml-1 text-xs text-gray-400">
                      ({parallelTrains[block.id].length})
                    </span>
                  )}
                </button>
                {/* Render branches */}
                {renderBranchNodes(block.id)}
              </li>
            ))}
          </ul>
          
          {explanationChain.length === 0 && (
            <div className="text-xs text-gray-400 italic py-2 px-4">
              Add blocks to start building your explanation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TreeView;