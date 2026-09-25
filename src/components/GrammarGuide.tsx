import React, { useState } from 'react';
import { GRAMMAR_TOPICS, SPANISH_ENGLISH_PAST_COMPARISONS, REGULAR_ED_PRONUNCIATION_RULES } from '../data/grammar';
import { Volume2, AlertCircle, CheckCircle2, ChevronRight, Layers, Mic } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';

export const GrammarGuide: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('past_simple');
  const [subSection, setSubSection] = useState<'tenses' | 'contrast' | 'pronunciation' | 'pitfalls'>('tenses');

  const currentTopic = GRAMMAR_TOPICS.find((t) => t.id === selectedTopicId) || GRAMMAR_TOPICS[0];

  return (
    <div className="space-y-8">
      {/* Sub-navigation bar */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-300 pb-3">
        <button
          onClick={() => setSubSection('tenses')}
          className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
            subSection === 'tenses'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Estructura de los Tiempos
        </button>

        <button
          onClick={() => setSubSection('contrast')}
          className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
            subSection === 'contrast'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Tabla Comparativa Español / Inglés
        </button>

        <button
          onClick={() => setSubSection('pronunciation')}
          className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
            subSection === 'pronunciation'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Pronunciación de "-ed" (/t/, /d/, /ɪd/)
        </button>

        <button
          onClick={() => setSubSection('pitfalls')}
          className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
            subSection === 'pitfalls'
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          Errores Típicos del Hispanohablante
        </button>
      </div>

      {/* VIEW 1: TENSES BREAKDOWN */}
      {subSection === 'tenses' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Menu of Tenses */}
          <div className="lg:col-span-4 border border-neutral-300 bg-white">
            <div className="p-4 border-b border-neutral-200 bg-neutral-50">
              <span className="text-[11px] font-mono uppercase text-neutral-500 font-bold block">
                Índice Temático
              </span>
              <h3 className="text-sm font-extrabold uppercase text-neutral-900">
                Tiempos Pasados en Inglés
              </h3>
            </div>
            <div className="divide-y divide-neutral-200">
              {GRAMMAR_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 flex items-center justify-between text-xs font-medium transition-colors ${
                    selectedTopicId === topic.id
                      ? 'bg-neutral-900 text-white font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <div>
                    <span className="block font-sans">{topic.title}</span>
                    <span
                      className={`text-[10px] font-mono ${
                        selectedTopicId === topic.id ? 'text-neutral-300' : 'text-neutral-400'
                      }`}
                    >
                      {topic.tag}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      selectedTopicId === topic.id ? 'text-white' : 'text-neutral-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Topic Detail View */}
          <div className="lg:col-span-8 border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {currentTopic.tag}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 uppercase tracking-tight">
                {currentTopic.title}
              </h2>
              <p className="mt-2 text-neutral-700 text-sm sm:text-base leading-relaxed">
                {currentTopic.summary}
              </p>
            </div>

            {/* Formula Block (Swiss Modernist Clean Cards) */}
            <div className="border border-neutral-300 bg-neutral-50 p-5 space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">
                Fórmulas Gramaticales
              </span>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 bg-white border border-neutral-200">
                  <span className="text-neutral-500 font-bold uppercase text-[10px]">Afirmativa:</span>
                  <span className="text-neutral-900 font-semibold">{currentTopic.formula.affirmative}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 bg-white border border-neutral-200">
                  <span className="text-rose-600 font-bold uppercase text-[10px]">Negativa:</span>
                  <span className="text-neutral-900 font-semibold">{currentTopic.formula.negative}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 bg-white border border-neutral-200">
                  <span className="text-blue-700 font-bold uppercase text-[10px]">Pregunta:</span>
                  <span className="text-neutral-900 font-semibold">{currentTopic.formula.question}</span>
                </div>
              </div>
            </div>

            {/* Spanish Contrast & Declerck Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-neutral-200 p-4 bg-white">
                <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
                  Equivalente en Español
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {currentTopic.spanishComparison}
                </p>
              </div>

              <div className="border border-neutral-200 p-4 bg-white">
                <span className="text-[10px] font-mono uppercase font-bold text-neutral-900 block mb-1">
                  Fundamento Declerck
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {currentTopic.declerckInsight}
                </p>
              </div>
            </div>

            {/* Key Time Adverbials Signals */}
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 tracking-wider block mb-2">
                Palabras y Señales Clave (Time Signals)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentTopic.keySignals.map((signal, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-medium"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            {/* Rules and Concrete Examples */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-mono uppercase font-bold text-neutral-950 tracking-wider block">
                Reglas Didácticas y Ejemplos
              </span>
              <div className="space-y-4">
                {currentTopic.rules.map((r, idx) => (
                  <div key={idx} className="border border-neutral-200 p-4 bg-neutral-50/50">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-neutral-900 font-mono">
                      {idx + 1}. {r.rule}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {r.explanation}
                    </p>

                    <div className="mt-3 bg-white p-3 border border-neutral-200 space-y-1 text-xs font-mono">
                      <div className="flex items-center justify-between text-neutral-900 font-semibold">
                        <span>«{r.exampleEn}»</span>
                        <button
                          onClick={() => playEnglishAudio(r.exampleEn)}
                          className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
                          title="Escuchar pronunciación"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-neutral-500 text-[11px]">
                        Español: {r.exampleEs}
                      </p>
                      {r.wrongEn && (
                        <p className="text-rose-600 text-[11px] mt-1 pt-1 border-t border-neutral-100">
                          ⚠️ {r.wrongEn}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: SPANISH VS ENGLISH COMPARISON MATRIX */}
      {subSection === 'contrast' && (
        <div className="border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
          <div>
            <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Correspondencia Directa
            </span>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-2">
              Cómo Traducir Cada Pasado del Español al Inglés
            </h2>
            <p className="text-sm text-neutral-600 max-w-3xl mt-1 leading-relaxed">
              En español tenemos varias formas de pasado (comí, comía, he comido, había comido) con usos sutiles que varían entre España y Latinoamérica. Consulta esta tabla para saber exactamente cuál elegir en inglés.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900 text-white font-mono uppercase tracking-wider">
                <tr>
                  <th className="p-3">Español</th>
                  <th className="p-3">Tiempo Gramatical (ES)</th>
                  <th className="p-3">Inglés Correcto</th>
                  <th className="p-3">Tiempo (EN)</th>
                  <th className="p-3">Explicación Clave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {SPANISH_ENGLISH_PAST_COMPARISONS.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="p-3 font-bold text-neutral-900 font-mono">{comp.spanishForm}</td>
                    <td className="p-3 text-neutral-600">{comp.spanishTense}</td>
                    <td className="p-3 font-bold text-neutral-950 font-mono bg-neutral-100/50">{comp.englishDefault}</td>
                    <td className="p-3 font-semibold text-rose-700">{comp.englishTense}</td>
                    <td className="p-3 text-neutral-700 leading-relaxed">
                      {comp.explanation}
                      <div className="mt-1 text-[11px] font-mono text-neutral-500">
                        Ej: {comp.exampleEn}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: PRONUNCIATION OF -ED */}
      {subSection === 'pronunciation' && (
        <div className="border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
          <div>
            <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Guía Fonética Didáctica
            </span>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-2">
              Las 3 Formas de Pronunciar la Terminación "-ed"
            </h2>
            <p className="text-sm text-neutral-600 max-w-3xl mt-1 leading-relaxed">
              El 90% de los hispanohablantes añade por error una sílaba «-ed» a todos los verbos regulares (*wórr-ked, *kú-ked). En inglés, la regla depende exclusivamente de si el sonido final es <strong>sordo</strong>, <strong>sonoro</strong> o <strong>T/D</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REGULAR_ED_PRONUNCIATION_RULES.map((p, idx) => (
              <div key={idx} className="border border-neutral-300 p-5 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-neutral-200 pb-2">
                    <span className="text-2xl font-extrabold font-mono text-neutral-950">{p.sound}</span>
                    <span className="text-xs font-mono font-bold uppercase text-neutral-500">{p.label}</span>
                  </div>

                  <p className="text-xs text-neutral-700 font-semibold mb-2">
                    {p.rule}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {p.howToProduce}
                  </p>

                  <div className="bg-neutral-50 p-3 border border-neutral-200 space-y-1.5 font-mono text-xs">
                    <span className="text-[10px] uppercase text-neutral-400 block font-bold">Verbos de ejemplo:</span>
                    {p.verbs.map((v, i) => (
                      <div key={i} className="flex items-center justify-between text-neutral-800">
                        <span>{v}</span>
                        <button
                          onClick={() => playEnglishAudio(v.split('→')[1]?.trim() || v)}
                          className="text-neutral-400 hover:text-neutral-900 p-0.5"
                          title="Escuchar"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] font-mono text-rose-600 font-bold">
                  {p.warning}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 4: COMMON SPANISH PITFALLS */}
      {subSection === 'pitfalls' && (
        <div className="border border-neutral-300 bg-white p-6 sm:p-8 space-y-6">
          <div>
            <span className="px-2 py-0.5 bg-rose-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              Cuidado con la Interferencia
            </span>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-2">
              Los 6 Errores Más Frecuentes de Hispanohablantes
            </h2>
            <p className="text-sm text-neutral-600 max-w-3xl mt-1 leading-relaxed">
              Estos errores no ocurren por falta de memoria, sino porque el cerebro intenta calcar la estructura del español en el inglés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                1. Doble Pasado con Auxiliar DID
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                "Did" ya lleva la carga del pasado. El verbo principal no puede estar en pasado.
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ I didn\'t went to work yesterday.</div>
                <div className="text-emerald-700 font-bold">✔️ I didn\'t go to work yesterday.</div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                2. Present Perfect con "Yesterday" o "Ago"
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                En español se dice "Ayer he salido". En inglés es una violación gramatical grave.
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ I have arrived 10 minutes ago.</div>
                <div className="text-emerald-700 font-bold">✔️ I arrived 10 minutes ago.</div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                3. "Would" con verbos de estado en el pasado
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                "Would" solo describe hábitos de acción. Con estados (live, be, have, like) solo se usa "used to".
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ When I was young, I would have a dog.</div>
                <div className="text-emerald-700 font-bold">✔️ When I was young, I used to have a dog.</div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                4. Confundir Lie (recostarse) con Lay (poner algo)
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                El pasado de recostarse en la cama es "lay" (intransitivo). "Laid" es poner un objeto.
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ I laid down on the grass because I was tired.</div>
                <div className="text-emerald-700 font-bold">✔️ I lay down on the grass because I was tired.</div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                5. Preguntar "¿Cuándo has llegado?" con Present Perfect
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                Preguntar "cuándo" siempre busca una fecha o momento cerrado en el pasado.
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ When have you received the letter?</div>
                <div className="text-emerald-700 font-bold">✔️ When did you receive the letter?</div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-white">
              <span className="text-xs font-mono font-bold text-neutral-950 block mb-1">
                6. Traducir "Llevaba 2 horas esperando" con el verbo "carry" o "take"
              </span>
              <p className="text-xs text-neutral-600 mb-2">
                La fórmula exacta en inglés es el Past Perfect Continuous: [had been + -ing for X time].
              </p>
              <div className="space-y-1 font-mono text-xs">
                <div className="text-rose-600 line-through">❌ I carried two hours waiting when he arrived.</div>
                <div className="text-emerald-700 font-bold">✔️ I had been waiting for two hours when he arrived.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
