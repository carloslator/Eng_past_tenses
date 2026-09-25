import React, { useState } from 'react';
import { READING_EXERCISES } from '../data/readings';
import { ReadingExercise, VerbAnnotation } from '../types';
import { Volume2, BookOpen, CheckCircle2, XCircle, Info, ChevronRight } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';

export const ReadingExercises: React.FC = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('reading-1');
  const [selectedAnnotation, setSelectedAnnotation] = useState<VerbAnnotation | null>(null);
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, number>>({});
  const [showQuestionResults, setShowQuestionResults] = useState<Record<string, boolean>>({});

  const currentExercise: ReadingExercise =
    READING_EXERCISES.find((r) => r.id === selectedExerciseId) || READING_EXERCISES[0];

  const handleSelectAnswer = (qIndex: number, optIndex: number) => {
    const key = `${currentExercise.id}-q-${qIndex}`;
    setQuestionAnswers((prev) => ({ ...prev, [key]: optIndex }));
    setShowQuestionResults((prev) => ({ ...prev, [key]: true }));
  };

  // Function to render text with clickable annotations
  const renderAnnotatedText = () => {
    let rawText = currentExercise.text;
    const annotations = currentExercise.annotations;

    // Split text into paragraphs
    const paragraphs = rawText.split('\n\n');

    return (
      <div className="space-y-4 font-sans text-neutral-800 text-base sm:text-lg leading-relaxed">
        {paragraphs.map((para, pIdx) => {
          // Identify matches in this paragraph
          return (
            <p key={pIdx}>
              {renderParagraphWithHighlights(para, annotations)}
            </p>
          );
        })}
      </div>
    );
  };

  const renderParagraphWithHighlights = (paragraph: string, annotations: VerbAnnotation[]) => {
    // Build a regex that matches any of the verb phrases
    // Sort annotations by phrase length descending to match longer phrases first (e.g. "had not seen" before "had")
    const sorted = [...annotations].sort((a, b) => b.verbPhrase.length - a.verbPhrase.length);

    // Escape regex characters
    const pattern = new RegExp(`\\b(${sorted.map((a) => a.verbPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');

    const parts = paragraph.split(pattern);

    return parts.map((part, i) => {
      const match = annotations.find(
        (a) => a.verbPhrase.toLowerCase() === part.toLowerCase()
      );

      if (match) {
        const isSelected = selectedAnnotation?.verbPhrase.toLowerCase() === match.verbPhrase.toLowerCase();
        return (
          <span
            key={i}
            onClick={() => setSelectedAnnotation(match)}
            className={`cursor-pointer px-1 py-0.5 rounded-xs transition-all font-semibold ${
              isSelected
                ? 'bg-neutral-950 text-white'
                : 'bg-neutral-100 text-neutral-950 hover:bg-neutral-200 border-b-2 border-neutral-900'
            }`}
            title="Haz clic para ver análisis gramatical"
          >
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-8">
      {/* Exercise Picker */}
      <div className="border border-neutral-300 bg-white p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Comprensión y Análisis de Textos
            </span>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-1">
              Lecturas Guiadas en Pasado
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-500">
            Haz clic en cualquier verbo destacado para ver su análisis Declerck
          </div>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 border-t border-neutral-100">
          {READING_EXERCISES.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => {
                setSelectedExerciseId(exercise.id);
                setSelectedAnnotation(null);
              }}
              className={`text-left p-3 border text-xs transition-all flex flex-col justify-between ${
                selectedExerciseId === exercise.id
                  ? 'bg-neutral-950 text-white border-neutral-950'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              <span className="font-bold block mb-1">{exercise.title}</span>
              <span
                className={`text-[10px] font-mono ${
                  selectedExerciseId === exercise.id ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Nivel: {exercise.level}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Reading & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Reading Text */}
        <div className="lg:col-span-7 border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400">
                Texto Narrativo • {currentExercise.level}
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-950 uppercase mt-0.5">
                {currentExercise.title}
              </h3>
              <p className="text-xs text-neutral-600 mt-1 font-medium">
                Enfoque: {currentExercise.subtitleSpanish}
              </p>
            </div>

            <button
              onClick={() => playEnglishAudio(currentExercise.text)}
              className="px-3 py-2 bg-neutral-100 border border-neutral-300 text-xs font-mono font-bold uppercase text-neutral-800 hover:bg-neutral-200 inline-flex items-center gap-1.5 shrink-0"
              title="Escuchar lectura en inglés"
            >
              <Volume2 className="w-4 h-4" />
              <span>Audio</span>
            </button>
          </div>

          {/* Passage */}
          <div className="bg-neutral-50/50 p-6 border border-neutral-200">
            {renderAnnotatedText()}
          </div>

          <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-neutral-700" />
            <span>Los verbos subrayados están anclados a la teoría de tiempos de Renaat Declerck.</span>
          </div>

          {/* Reading Comprehension Questions */}
          {currentExercise.comprehensionQuestions && (
            <div className="pt-6 border-t border-neutral-200 space-y-6">
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-neutral-900 block">
                Preguntas de Análisis Gramatical
              </span>

              {currentExercise.comprehensionQuestions.map((q, qIdx) => {
                const answerKey = `${currentExercise.id}-q-${qIdx}`;
                const answeredOpt = questionAnswers[answerKey];
                const isAnswered = showQuestionResults[answerKey];

                return (
                  <div key={qIdx} className="border border-neutral-200 p-4 bg-white space-y-3 text-xs">
                    <h4 className="font-bold text-neutral-950 text-sm font-sans">
                      {qIdx + 1}. {q.question}
                    </h4>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-neutral-800';

                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold';
                          } else if (optIdx === answeredOpt) {
                            btnStyle = 'border-rose-600 bg-rose-50 text-rose-950 line-through';
                          } else {
                            btnStyle = 'border-neutral-200 bg-white text-neutral-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectAnswer(qIdx, optIdx)}
                            className={`w-full text-left p-3 border font-mono transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {isAnswered && optIdx === answeredOpt && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="p-3 bg-neutral-50 border border-neutral-200 text-neutral-700 font-mono text-[11px] leading-relaxed">
                        <strong>Explicación:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Declerck Analysis Sidebar */}
        <div className="lg:col-span-5 sticky top-6">
          <div className="border border-neutral-300 bg-white p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-neutral-900">
                Ficha de Análisis Lingüístico
              </span>
              <BookOpen className="w-4 h-4 text-neutral-500" />
            </div>

            {selectedAnnotation ? (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
                    Forma Verbal Seleccionada
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-neutral-950">
                      «{selectedAnnotation.verbPhrase}»
                    </span>
                    <button
                      onClick={() => playEnglishAudio(selectedAnnotation.verbPhrase)}
                      className="text-neutral-400 hover:text-neutral-900 p-1"
                      title="Pronunciar forma"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold">
                    {selectedAnnotation.tenseLabel}
                  </span>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block">
                    Traducción al Español en Contexto
                  </span>
                  <p className="text-sm font-semibold text-neutral-900">
                    «{selectedAnnotation.spanishTranslation}»
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 bg-white border border-neutral-200">
                    <span className="text-[10px] uppercase text-neutral-400 block">Esfera</span>
                    <span className="font-bold text-neutral-900">
                      {selectedAnnotation.timeSphere === 'past_sphere'
                        ? 'Past Sphere (Cerrada)'
                        : 'Pre-Present Sector'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-white border border-neutral-200">
                    <span className="text-[10px] uppercase text-neutral-400 block">Aspecto</span>
                    <span className="font-bold text-neutral-900">
                      {selectedAnnotation.aspect === 'bounded'
                        ? 'Bounded (Delimitada)'
                        : 'Unbounded (De fondo)'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-mono uppercase font-bold text-neutral-900 block">
                    ¿Por qué se usa este tiempo aquí?
                  </span>
                  <p className="text-neutral-700 leading-relaxed bg-neutral-50 p-3 border border-neutral-200">
                    {selectedAnnotation.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-neutral-500 space-y-2">
                <span className="block text-2xl font-mono text-neutral-300">∅</span>
                <p className="text-xs font-mono">
                  Haz clic en cualquier verbo resaltado en el texto para ver su desglose según la teoría de Declerck.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
