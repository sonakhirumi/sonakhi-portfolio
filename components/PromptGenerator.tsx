
import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generateWritingPrompt } from '../services/gemini';
import { WritingPrompt } from '../types';

const PromptGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<WritingPrompt | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState('Science Fiction');

  const genres = ['Science Fiction', 'Gothic Horror', 'Modern Noir', 'Fairy Tale', 'Cyberpunk', 'Literary Fiction'];

  const handleGenerate = async () => {
    setIsLoading(true);
    const newPrompt = await generateWritingPrompt(genre);
    setPrompt(newPrompt);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-stone-800 rounded-full text-stone-400 text-xs font-bold uppercase tracking-widest mb-8 border border-stone-700">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Writer's Block Buster</span>
      </div>
      
      <h2 className="font-serif text-4xl md:text-5xl mb-6">Need Inspiration?</h2>
      <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
        Struggling with the blank page? Select a genre and let our AI-powered creative engine generate a unique spark for your next story.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              genre === g 
              ? 'bg-stone-100 text-stone-900 shadow-lg shadow-white/10' 
              : 'bg-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="relative min-h-[250px] flex flex-col items-center justify-center p-12 bg-stone-800/50 rounded-3xl border border-stone-700 backdrop-blur-sm overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
        
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4 animate-pulse">
            <Loader2 className="w-8 h-8 text-stone-500 animate-spin" />
            <p className="text-stone-500 font-medium">Summoning inspiration...</p>
          </div>
        ) : prompt ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            <h4 className="font-serif text-2xl md:text-3xl text-stone-100 leading-relaxed italic">
              "{prompt.prompt}"
            </h4>
            <div className="pt-6 border-t border-stone-700/50">
              <p className="text-stone-400 text-sm italic">Setting: {prompt.context}</p>
            </div>
          </div>
        ) : (
          <div className="text-stone-500 italic">
            Select a genre above and click "Generate" to start...
          </div>
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="mt-10 inline-flex items-center px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-bold hover:bg-white transition-all disabled:opacity-50 group"
      >
        {isLoading ? 'Generating...' : prompt ? 'Try Another' : 'Generate Prompt'}
        {!isLoading && <RefreshCw className={`ml-2 w-4 h-4 transition-transform ${prompt ? 'group-hover:rotate-180' : ''}`} />}
      </button>
    </div>
  );
};

export default PromptGenerator;
