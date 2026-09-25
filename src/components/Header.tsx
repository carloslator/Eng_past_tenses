import React from 'react';
import { BookOpen, Clock, Compass, Layers, CheckSquare, FileText, Volume2 } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';

export type NavTab = 'guide' | 'spheres' | 'verbs' | 'flashcards' | 'quiz' | 'readings';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  verbsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, verbsCount }) => {
  return (
    <header className="border-b border-neutral-300 bg-white">
      {/* Top Swiss Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center px-2 py-0.5 bg-neutral-900 text-white text-xs font-mono font-bold tracking-widest uppercase">
                EN/ES
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Grammar Reference System • Renaat Declerck Model
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mt-1 uppercase">
              TIEMPO <span className="font-light text-neutral-400">/</span> PAST TENSES
            </h1>
            <p className="text-sm text-neutral-600 max-w-2xl mt-1 leading-relaxed">
              Guía didáctica de los tiempos pasados en inglés para hispanohablantes. 
              Explicaciones concisas, contrastes directos con el español y {verbsCount} verbos conjugados.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => playEnglishAudio("Welcome to Tiempo. Learn the English past tenses with clarity and precision.")}
              className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-300 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-900 transition-colors"
              title="Escuchar audio de bienvenida"
            >
              <Volume2 className="w-3.5 h-3.5 text-neutral-900" />
              <span>Audio EN</span>
            </button>
            <div className="text-right pl-3 border-l border-neutral-200 hidden sm:block">
              <span className="block text-[10px] font-mono uppercase text-neutral-400">Objetivo</span>
              <span className="text-xs font-semibold text-neutral-800">Dominio del Pasado</span>
            </div>
          </div>
        </div>

        {/* Swiss Navigation Tabs */}
        <nav className="mt-6 flex flex-wrap gap-1 border-t border-neutral-200 pt-3">
          <button
            onClick={() => setActiveTab('guide')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'guide'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Guía Gramatical</span>
          </button>

          <button
            onClick={() => setActiveTab('spheres')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'spheres'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>2. Esferas Temporales</span>
          </button>

          <button
            onClick={() => setActiveTab('verbs')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'verbs'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>3. Verbos ({verbsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'flashcards'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4. Flashcards</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'quiz'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>5. Tests Interactivos</span>
          </button>

          <button
            onClick={() => setActiveTab('readings')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'readings'
                ? 'border-neutral-950 text-neutral-950 bg-neutral-100/70'
                : 'border-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>6. Lecturas Anotadas</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
