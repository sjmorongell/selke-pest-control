import { X, Search } from 'lucide-react';
import { useState } from 'react';
import { pestLibrary, PestInfo } from '../utils/pestLibrary';

interface PestLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PestLibraryModal({ isOpen, onClose }: PestLibraryModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPest, setSelectedPest] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredPests = Object.entries(pestLibrary).filter(([key, pest]) =>
    pest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPestInfo = selectedPest ? pestLibrary[selectedPest] : null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl">Pest Library</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {!selectedPest ? (
            <>
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPests.map(([key, pest]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPest(key)}
                    className="bg-gray-50 hover:bg-cyan-50 border border-gray-200 hover:border-cyan-500 rounded-lg p-4 text-left transition-all"
                  >
                    <p className="font-medium text-gray-900">{pest.name}</p>
                    <p className="text-xs text-gray-500 mt-1 capitalize">{pest.category}</p>
                  </button>
                ))}
              </div>
            </>
          ) : selectedPestInfo && (
            <div>
              <button
                onClick={() => setSelectedPest(null)}
                className="text-cyan-600 hover:text-cyan-700 mb-4 flex items-center gap-2"
              >
                ← Back to all pests
              </button>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-3xl mb-2">{selectedPestInfo.name}</h3>
                <span className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full capitalize">
                  {selectedPestInfo.category}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPestInfo.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Habitat & Behavior</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPestInfo.habitat}</p>
                </div>

                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Need help with {selectedPestInfo.name.toLowerCase()}?</strong> Contact Selke Pest Control for professional treatment and prevention strategies.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
