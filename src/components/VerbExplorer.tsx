import React, { useState, useMemo } from 'react';
import { VERBS_DATA } from '../data/verbs';
import { Verb, VerbCategory } from '../types';
import { Search, Volume2, Copy, Check, Filter, BookOpen } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';

export const VerbExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const filteredVerbs = useMemo(() => {
    return VERBS_DATA.filter((verb) => {
      const matchesSearch =
        verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.pastSimple.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.pastParticiple.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.spanish.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || verb.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopy = (verb: Verb) => {
    const text = `${verb.infinitive} - ${verb.pastSimple} - ${verb.pastParticiple} (${verb.spanish})`;
    navigator.clipboard.writeText(text);
    setCopiedId(verb.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getCategoryBadge = (category: VerbCategory) => {
    switch (category) {
      case 'regular_t':
        return <span className="px-1.5 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold">Reg /t/</span>;
      case 'regular_d':
        return <span className="px-1.5 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold">Reg /d/</span>;
      case 'regular_id':
        return <span className="px-1.5 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 font-mono text-[10px] font-bold">Reg /ɪd/</span>;
      case 'irregular_vowel':
        return <span className="px-1.5 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 font-mono text-[10px] font-bold">Irreg Vocal</span>;
      case 'irregular_same':
        return <span className="px-1.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 font-mono text-[10px] font-bold">Sin Cambio</span>;
      case 'irregular_unique':
        return <span className="px-1.5 py-0.5 bg-purple-50 text-purple-900 border border-purple-200 font-mono text-[10px] font-bold">Irreg Clave</span>;
      case 'tricky_pairs':
        return <span className="px-1.5 py-0.5 bg-rose-600 text-white font-mono text-[10px] font-bold">Par Difícil</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="border border-neutral-300 bg-white p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                Catálogo Completo
              </span>
              <span className="text-xs font-mono text-neutral-500">
                {filteredVerbs.length} de {VERBS_DATA.length} verbos
              </span>
            </div>
            <h2 className="text-2xl font-extrabold uppercase text-neutral-950 mt-1">
              Diccionario de Verbos y Conjugación
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
                viewMode === 'table'
                  ? 'bg-neutral-950 text-white border-neutral-950'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              Tabla
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border ${
                viewMode === 'cards'
                  ? 'bg-neutral-950 text-white border-neutral-950'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              Tarjetas
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Buscar por infinitivo, pasado simple, participio o español (ej: went, ate, pedir, lie, break)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-300 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-xs font-mono text-neutral-400 hover:text-neutral-900"
            >
              LIMPIAR
            </button>
          )}
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0 mr-1" />
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Todos ({VERBS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedCategory('regular_t')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'regular_t'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Regular /t/
          </button>
          <button
            onClick={() => setSelectedCategory('regular_d')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'regular_d'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Regular /d/
          </button>
          <button
            onClick={() => setSelectedCategory('regular_id')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'regular_id'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Regular /ɪd/
          </button>
          <button
            onClick={() => setSelectedCategory('irregular_vowel')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'irregular_vowel'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Irregulares (Vocal)
          </button>
          <button
            onClick={() => setSelectedCategory('irregular_same')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'irregular_same'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200'
            }`}
          >
            Sin Cambio (cut/put)
          </button>
          <button
            onClick={() => setSelectedCategory('tricky_pairs')}
            className={`px-2.5 py-1 shrink-0 font-bold uppercase tracking-wider border transition-colors ${
              selectedCategory === 'tricky_pairs'
                ? 'bg-rose-600 text-white border-rose-600'
                : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
            }`}
          >
            Pares Trampa (lie/lay...)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'table' ? (
        <div className="border border-neutral-300 bg-white overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-900 text-white font-mono uppercase tracking-wider border-b border-neutral-800">
              <tr>
                <th className="p-3 w-10 text-center">Audio</th>
                <th className="p-3">Infinitive (V1)</th>
                <th className="p-3">Past Simple (V2)</th>
                <th className="p-3">Past Participle (V3)</th>
                <th className="p-3">Español</th>
                <th className="p-3">Tipo / Fonética</th>
                <th className="p-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredVerbs.map((verb) => (
                <tr
                  key={verb.id}
                  onClick={() => setSelectedVerb(verb)}
                  className={`cursor-pointer hover:bg-neutral-100/70 transition-colors ${
                    selectedVerb?.id === verb.id ? 'bg-neutral-100 font-semibold' : ''
                  }`}
                >
                  <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => playEnglishAudio(`${verb.infinitive}, ${verb.pastSimple}, ${verb.pastParticiple}`)}
                      className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
                      title="Escuchar conjugación"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="p-3 font-mono font-bold text-neutral-950">{verb.infinitive}</td>
                  <td className="p-3 font-mono font-bold text-rose-700 bg-neutral-50/70">{verb.pastSimple}</td>
                  <td className="p-3 font-mono text-neutral-700">{verb.pastParticiple}</td>
                  <td className="p-3 text-neutral-800">{verb.spanish}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {getCategoryBadge(verb.category)}
                      {verb.pronunciationEd && (
                        <span className="font-mono text-[10px] text-neutral-500">
                          {verb.pronunciationEd}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleCopy(verb)}
                      className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
                      title="Copiar"
                    >
                      {copiedId === verb.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVerbs.map((verb) => (
            <div
              key={verb.id}
              onClick={() => setSelectedVerb(verb)}
              className={`border p-5 bg-white cursor-pointer hover:border-neutral-950 transition-all flex flex-col justify-between ${
                selectedVerb?.id === verb.id
                  ? 'border-neutral-950 ring-1 ring-neutral-950'
                  : 'border-neutral-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold font-mono text-neutral-950">
                    {verb.infinitive}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playEnglishAudio(`${verb.infinitive}, ${verb.pastSimple}, ${verb.pastParticiple}`);
                      }}
                      className="text-neutral-400 hover:text-neutral-900 p-1"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    {getCategoryBadge(verb.category)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-neutral-50 border border-neutral-200 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase block">Past Simple</span>
                    <span className="font-bold text-rose-700">{verb.pastSimple}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase block">Past Participle</span>
                    <span className="font-semibold text-neutral-800">{verb.pastParticiple}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-600">
                  <span className="font-bold text-neutral-900">Español:</span> {verb.spanish}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{verb.pronunciationEd || 'Verbo estándar'}</span>
                <span className="text-neutral-900 font-semibold flex items-center gap-1">
                  Ver ejemplo →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Verb Details Modal / Panel */}
      {selectedVerb && (
        <div className="border-2 border-neutral-950 bg-white p-6 sm:p-8 space-y-5 animate-in fade-in duration-150">
          <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {getCategoryBadge(selectedVerb.category)}
                <span className="text-xs font-mono text-neutral-500">
                  ID: #{selectedVerb.id}
                </span>
              </div>
              <h3 className="text-3xl font-extrabold font-mono uppercase text-neutral-950">
                {selectedVerb.infinitive}
              </h3>
              <p className="text-sm text-neutral-600 font-medium">
                Significado en español: <strong>{selectedVerb.spanish}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => playEnglishAudio(`${selectedVerb.infinitive}, ${selectedVerb.pastSimple}, ${selectedVerb.pastParticiple}`)}
                className="px-3 py-2 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:bg-neutral-800 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Escuchar Verbo</span>
              </button>
              <button
                onClick={() => setSelectedVerb(null)}
                className="px-3 py-2 border border-neutral-300 text-neutral-600 hover:text-neutral-950 text-xs font-mono font-bold uppercase"
              >
                Cerrar
              </button>
            </div>
          </div>

          {/* 3 Forms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
                Infinitive (Base Form)
              </span>
              <span className="text-xl font-mono font-extrabold text-neutral-950">
                {selectedVerb.infinitive}
              </span>
            </div>

            <div className="p-4 bg-rose-50/70 border border-rose-200">
              <span className="text-[10px] font-mono uppercase font-bold text-rose-700 block mb-1">
                Past Simple (Preterit)
              </span>
              <span className="text-xl font-mono font-extrabold text-rose-800">
                {selectedVerb.pastSimple}
              </span>
              {selectedVerb.pronunciationEd && (
                <span className="block text-[11px] font-mono text-rose-600 mt-1">
                  Pronunciación: {selectedVerb.pronunciationEd}
                </span>
              )}
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
                Past Participle (Perfecto)
              </span>
              <span className="text-xl font-mono font-extrabold text-neutral-800">
                {selectedVerb.pastParticiple}
              </span>
            </div>
          </div>

          {/* Grammar & Pedagogical notes */}
          <div className="border border-neutral-200 p-4 bg-white space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-700" />
              <span className="text-xs font-bold uppercase font-mono text-neutral-900">
                Patrón y Clave Didáctica
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {selectedVerb.patternDescription}
            </p>
          </div>

          {/* Example Sentence with Audio */}
          <div className="border border-neutral-200 p-4 bg-neutral-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400">
                Oración Ejemplo de Uso Real
              </span>
              <button
                onClick={() => playEnglishAudio(selectedVerb.exampleSentence)}
                className="text-neutral-500 hover:text-neutral-900 font-mono text-xs inline-flex items-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Escuchar Frase</span>
              </button>
            </div>
            <p className="text-base font-medium text-neutral-950 font-sans">
              «{selectedVerb.exampleSentence}»
            </p>
            <p className="text-xs text-neutral-600">
              Español: {selectedVerb.exampleSpanish}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
