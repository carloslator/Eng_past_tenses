/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, NavTab } from './components/Header';
import { GrammarGuide } from './components/GrammarGuide';
import { TimeSphereVisualizer } from './components/TimeSphereVisualizer';
import { VerbExplorer } from './components/VerbExplorer';
import { Flashcards } from './components/Flashcards';
import { QuizSection } from './components/QuizSection';
import { ReadingExercises } from './components/ReadingExercises';
import { VERBS_DATA } from './data/verbs';
import { BookOpen, Compass, Clock, Layers, CheckSquare, FileText, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('guide');

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Swiss Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        verbsCount={VERBS_DATA.length}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'guide' && <GrammarGuide />}
        {activeTab === 'spheres' && <TimeSphereVisualizer />}
        {activeTab === 'verbs' && <VerbExplorer />}
        {activeTab === 'flashcards' && <Flashcards />}
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'readings' && <ReadingExercises />}
      </main>

      {/* Swiss Modernist Footer */}
      <footer className="border-t border-neutral-300 bg-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-neutral-200">
            <div className="md:col-span-2 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
                TIEMPO • SISTEMA DIDÁCTICO DE GRAMÁTICA
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-md">
                Diseñado con la estética tipográfica suiza (International Typographic Style). Enfocado en neutralizar la interferencia del español mediante el modelo de esferas temporales de Renaat Declerck.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">
                Referencia: Declerck, R. (2006). <em>The Grammar of the English Tense System: A Comprehensive Analysis</em>. Mouton de Gruyter.
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                Módulos del Sistema
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-neutral-700">
                <li>
                  <button onClick={() => setActiveTab('guide')} className="hover:text-neutral-950 transition-colors">
                    → 1. Guía Gramatical
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('spheres')} className="hover:text-neutral-950 transition-colors">
                    → 2. Esferas Temporales
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('verbs')} className="hover:text-neutral-950 transition-colors">
                    → 3. Catálogo de 100+ Verbos
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('flashcards')} className="hover:text-neutral-950 transition-colors">
                    → 4. Flashcards Interactivas
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('quiz')} className="hover:text-neutral-950 transition-colors">
                    → 5. Laboratorio de Tests
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('readings')} className="hover:text-neutral-950 transition-colors">
                    → 6. Lecturas Anotadas
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                Cobertura Lingüística
              </span>
              <div className="space-y-2 text-xs text-neutral-600 font-mono">
                <div>• {VERBS_DATA.length} Verbos con audio y fonética</div>
                <div>• Reglas /t/, /d/, /ɪd/ para "-ed"</div>
                <div>• Bounded vs. Unbounded aspect</div>
                <div>• Pre-present sector vs. Past Sphere</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <span>© TIEMPO — Educational English Grammar for Spanish Speakers</span>
            <span>Tipografía: Inter & JetBrains Mono • Estética Helvética</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

