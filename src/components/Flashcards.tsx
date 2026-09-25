import React, { useState, useMemo } from 'react';
import { VERBS_DATA } from '../data/verbs';
import { Volume2, RotateCw, Check, X, Shuffle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';
import confetti from 'canvas-confetti';

export const Flashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const cardList = useMemo(() => {
    if (filterCategory === 'all') return VERBS_DATA;
    return VERBS_DATA.filter((v) => v.category === filterCategory);
  }, [filterCategory]);

  const currentVerb = cardList[currentIndex] || cardList[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * cardList.length);
    setCurrentIndex(randomIndex);
  };

  const markMastered = () => {
    const nextSet = new Set(masteredIds);
    if (nextSet.has(currentVerb.id)) {
      nextSet.delete(currentVerb.id);
    } else {
      nextSet.add(currentVerb.id);
      if (nextSet.size % 10 === 0) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      }
    }
    setMasteredIds(nextSet);
    handleNext();
  };

  const isCurrentMastered = masteredIds.has(currentVerb?.id);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Controls */}
      <div className="border border-neutral-300 bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Entrenamiento de Memoria
            </span>
            <span className="text-xs font-mono text-neutral-500">
              {currentIndex + 1} de {cardList.length}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold uppercase text-neutral-950">
            Flashcards de Conjugación
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="px-3 py-1.5 border border-neutral-300 text-xs font-mono font-bold uppercase text-neutral-700 hover:bg-neutral-100 flex items-center gap-1.5"
            title="Barajar tarjetas"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Barajar</span>
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
        <button
          onClick={() => { setFilterCategory('all'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'all'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Todos ({VERBS_DATA.length})
        </button>
        <button
          onClick={() => { setFilterCategory('regular_t'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'regular_t'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Regulares /t/
        </button>
        <button
          onClick={() => { setFilterCategory('regular_d'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'regular_d'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Regulares /d/
        </button>
        <button
          onClick={() => { setFilterCategory('regular_id'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'regular_id'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Regulares /ɪd/
        </button>
        <button
          onClick={() => { setFilterCategory('irregular_vowel'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'irregular_vowel'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Irregulares
        </button>
        <button
          onClick={() => { setFilterCategory('tricky_pairs'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
            filterCategory === 'tricky_pairs'
              ? 'bg-rose-600 text-white border-rose-600'
              : 'bg-white text-rose-700 border-rose-300 hover:bg-rose-50'
          }`}
        >
          Pares Trampa
        </button>
      </div>

      {/* Progress Bar */}
      <div className="border border-neutral-300 bg-white p-3 flex items-center justify-between text-xs font-mono">
        <span>Dominadas: <strong>{masteredIds.size}</strong> de {VERBS_DATA.length}</span>
        <div className="w-48 bg-neutral-100 h-2 border border-neutral-200 overflow-hidden">
          <div
            className="bg-neutral-900 h-full transition-all duration-300"
            style={{ width: `${(masteredIds.size / VERBS_DATA.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Flashcard Component */}
      {currentVerb && (
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="border-2 border-neutral-950 bg-white min-h-[340px] p-8 sm:p-10 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between select-none relative"
        >
          {/* Top Status */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
              {isFlipped ? 'REVERSO (SOLUCIÓN)' : 'ANVERSO (PREGUNTA)'}
            </span>
            <div className="flex items-center gap-2">
              {isCurrentMastered && (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold uppercase">
                  Dominado
                </span>
              )}
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                <RotateCw className="w-3 h-3" />
                Haz clic para voltear
              </span>
            </div>
          </div>

          {/* Card Body */}
          {!isFlipped ? (
            <div className="text-center py-8 space-y-4">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-neutral-950 block tracking-tight">
                {currentVerb.infinitive}
              </span>
              <p className="text-base sm:text-lg text-neutral-600 font-medium">
                « {currentVerb.spanish} »
              </p>
              <div className="pt-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  ¿Recuerdas el Past Simple y Past Participle?
                </span>
              </div>
            </div>
          ) : (
            <div className="py-4 space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-rose-50 border border-rose-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-rose-700 block">
                    Past Simple (V2)
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-rose-900 block mt-1">
                    {currentVerb.pastSimple}
                  </span>
                  {currentVerb.pronunciationEd && (
                    <span className="text-xs font-mono text-rose-700 mt-1 block">
                      {currentVerb.pronunciationEd}
                    </span>
                  )}
                </div>

                <div className="p-4 bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
                    Past Participle (V3)
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-neutral-900 block mt-1">
                    {currentVerb.pastParticiple}
                  </span>
                </div>
              </div>

              <div className="border border-neutral-200 p-3 bg-neutral-50 font-mono text-xs space-y-1">
                <div className="flex items-center justify-between text-neutral-900 font-semibold">
                  <span>«{currentVerb.exampleSentence}»</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playEnglishAudio(currentVerb.exampleSentence);
                    }}
                    className="text-neutral-500 hover:text-neutral-900 p-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-neutral-500 text-[11px]">
                  {currentVerb.exampleSpanish}
                </p>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong>Clave:</strong> {currentVerb.patternDescription}
              </p>
            </div>
          )}

          {/* Bottom Audio Helper */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => playEnglishAudio(
                isFlipped
                  ? `${currentVerb.infinitive}, ${currentVerb.pastSimple}, ${currentVerb.pastParticiple}`
                  : currentVerb.infinitive
              )}
              className="text-xs font-mono text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1.5"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Pronunciar en inglés</span>
            </button>
            <span className="text-[11px] font-mono text-neutral-400">
              Espacio o clic para voltear
            </span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2.5 border border-neutral-300 bg-white text-xs font-mono font-bold uppercase text-neutral-700 hover:bg-neutral-50 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Anterior</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={markMastered}
            className={`px-4 py-2.5 border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
              isCurrentMastered
                ? 'bg-neutral-100 text-neutral-600 border-neutral-300'
                : 'bg-neutral-950 text-white border-neutral-950 hover:bg-neutral-800'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            <span>{isCurrentMastered ? 'Desmarcar' : 'Ya me lo sé'}</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          className="px-4 py-2.5 border border-neutral-300 bg-white text-xs font-mono font-bold uppercase text-neutral-700 hover:bg-neutral-50 flex items-center gap-1.5"
        >
          <span>Siguiente</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
