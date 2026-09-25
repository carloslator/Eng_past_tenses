import React, { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, Volume2, RotateCcw, Award, ArrowRight, BookOpen } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';
import confetti from 'canvas-confetti';

export const QuizSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const activeQuestions = useMemo(() => {
    if (selectedCategory === 'all') return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQ: QuizQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    setTotalAnswered((prev) => prev + 1);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTotalAnswered(0);
    setShowSummary(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTotalAnswered(0);
    setShowSummary(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Category selector */}
      <div className="border border-neutral-300 bg-white p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Evaluación Didáctica
            </span>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-1">
              Laboratorio de Tests Interactivos
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-neutral-500 uppercase block">Puntuación</span>
            <span className="text-lg font-mono font-bold text-neutral-950">
              {score} / {totalAnswered} ({totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0}%)
            </span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 text-xs font-mono pt-2 border-t border-neutral-100">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Todos los Tests ({QUIZ_QUESTIONS.length})
          </button>
          <button
            onClick={() => handleCategoryChange('past_vs_perfect')}
            className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
              selectedCategory === 'past_vs_perfect'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Past Simple vs. Present Perfect
          </button>
          <button
            onClick={() => handleCategoryChange('simple_vs_continuous')}
            className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
              selectedCategory === 'simple_vs_continuous'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Simple vs. Continuous
          </button>
          <button
            onClick={() => handleCategoryChange('past_perfect')}
            className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
              selectedCategory === 'past_perfect'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Past Perfect (Orden de Eventos)
          </button>
          <button
            onClick={() => handleCategoryChange('general_mastery')}
            className={`px-3 py-1.5 font-bold uppercase tracking-wider border ${
              selectedCategory === 'general_mastery'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Casos Difíciles & Modales
          </button>
        </div>
      </div>

      {!showSummary ? (
        currentQ && (
          <div className="border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
            {/* Progress Bar & Counter */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-3 border-b border-neutral-200">
              <span>Pregunta {currentQuestionIndex + 1} de {activeQuestions.length}</span>
              <span className="uppercase font-bold text-neutral-900">{currentQ.title}</span>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-sans leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-neutral-900';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600';
                  } else if (idx === selectedOption) {
                    btnStyle = 'border-rose-600 bg-rose-50 text-rose-950 line-through';
                  } else {
                    btnStyle = 'border-neutral-200 bg-white text-neutral-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 border font-mono text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Explanation Banner */}
            {isAnswered && (
              <div className="p-5 border border-neutral-300 bg-neutral-50 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-neutral-800" />
                    Explicación Didáctica
                  </span>
                  <button
                    onClick={() => playEnglishAudio(currentQ.question.replace('_____', currentQ.options[currentQ.correctIndex]))}
                    className="text-xs font-mono text-neutral-600 hover:text-neutral-950 inline-flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Escuchar frase resuelta</span>
                  </button>
                </div>

                <p className="text-sm text-neutral-800 leading-relaxed">
                  {currentQ.explanationSpanish}
                </p>

                {currentQ.declerckNote && (
                  <div className="p-3 bg-white border border-neutral-200 text-xs text-neutral-700 font-mono">
                    <span className="font-bold text-neutral-900 block mb-0.5">Nota teórica Declerck:</span>
                    {currentQ.declerckNote}
                  </div>
                )}

                <div className="text-xs font-mono text-neutral-500">
                  <strong>Traducción equivalente:</strong> {currentQ.spanishEquivalent}
                </div>

                <div className="pt-2 text-right">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 bg-neutral-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 inline-flex items-center gap-2"
                  >
                    <span>{currentQuestionIndex + 1 === activeQuestions.length ? 'Ver Resultados' : 'Siguiente Pregunta'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      ) : (
        /* Final Summary View */
        <div className="border border-neutral-300 bg-white p-8 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-neutral-950 text-white mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Test Completado
            </span>
            <h3 className="text-3xl font-extrabold uppercase text-neutral-950">
              Resultado Final
            </h3>
            <p className="text-5xl font-extrabold font-mono text-neutral-950 py-3">
              {score} / {activeQuestions.length}
            </p>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              {score === activeQuestions.length
                ? '¡Perfecto! Has dominado las distinciones temporales del inglés sin errores de interferencia.'
                : score >= activeQuestions.length * 0.7
                ? '¡Muy buen trabajo! Tienes claros los conceptos fundamentales de las esferas de tiempo.'
                : 'Buen intento. Te recomendamos repasar la sección de Esferas Temporales y los Pares Trampa.'}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-neutral-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar este Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
