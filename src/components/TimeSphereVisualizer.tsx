import React, { useState } from 'react';
import { Volume2, ArrowRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { playEnglishAudio } from '../utils/speech';

export const TimeSphereVisualizer: React.FC = () => {
  const [selectedSphere, setSelectedSphere] = useState<'past' | 'present'>('past');
  const [aspectMode, setAspectMode] = useState<'bounded' | 'unbounded'>('bounded');

  return (
    <div className="space-y-10">
      {/* Intro section */}
      <div className="border border-neutral-300 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[11px] font-bold uppercase tracking-widest">
            Teoría Declerck Simplificada
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            Las Dos Esferas Temporales
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-neutral-950">
          ¿Por qué el inglés no funciona como el español en el pasado?
        </h2>
        <p className="mt-3 text-neutral-700 leading-relaxed text-sm sm:text-base max-w-4xl">
          El prestigioso lingüista <strong>Renaat Declerck</strong> demostró que el inglés no divide el tiempo simplemente en «pasado, presente y futuro», sino en <strong>dos grandes esferas psicológicas</strong>: la <strong>Esfera del Pasado</strong> (totalmente desconectada de AHORA) y la <strong>Esfera del Presente</strong> (que abarca AHORA y el periodo que lleva hasta él). Comprender esto resuelve el 95% de los errores de los hispanohablantes.
        </p>
      </div>

      {/* Interactive Time-Sphere Canvas */}
      <div className="border border-neutral-300 bg-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-neutral-900">
              Selector de Esfera Temporal
            </h3>
            <p className="text-xs text-neutral-500 font-mono">
              Haz clic para explorar cómo se organizan los tiempos verbales en cada esfera
            </p>
          </div>

          <div className="inline-flex border border-neutral-300 p-0.5 bg-neutral-100">
            <button
              onClick={() => setSelectedSphere('past')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                selectedSphere === 'past'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              1. Past Time-Sphere (Pasado Cerrado)
            </button>
            <button
              onClick={() => setSelectedSphere('present')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                selectedSphere === 'present'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              2. Present Sphere (Pre-Presente / Abierto)
            </button>
          </div>
        </div>

        {/* Visual Line Diagram */}
        <div className="my-8 p-6 bg-neutral-50 border border-neutral-200 overflow-x-auto">
          <div className="min-w-[620px]">
            {/* Visual Timeline Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-500 mb-2">
              <span>← Más allá en el pasado</span>
              <span className="font-bold text-neutral-900">Ruptura psicológica (The Cut)</span>
              <span className="text-rose-600 font-bold">t₀ (AHORA / NOW)</span>
              <span>Futuro →</span>
            </div>

            <div className="relative h-14 bg-neutral-200 border border-neutral-300 flex items-center">
              {/* Past Sphere Region */}
              <div
                className={`h-full flex items-center justify-center font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedSphere === 'past'
                    ? 'w-7/12 bg-neutral-900 text-white'
                    : 'w-7/12 bg-neutral-300 text-neutral-700'
                }`}
              >
                Past Time-Sphere (Desconectada de t₀)
              </div>

              {/* Dotted Break Line */}
              <div className="w-1 h-full border-r-2 border-dashed border-neutral-600 z-10"></div>

              {/* Pre-Present Sector Region */}
              <div
                className={`h-full flex items-center justify-center font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedSphere === 'present'
                    ? 'w-5/12 bg-rose-600 text-white'
                    : 'w-5/12 bg-neutral-100 text-neutral-800'
                }`}
              >
                Pre-Present Sector (Conectado a t₀)
              </div>

              {/* Zero-point indicator */}
              <div className="absolute right-[25%] -top-3 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 ring-4 ring-white"></span>
                <span className="text-[10px] font-mono font-bold text-rose-700 mt-1">t₀ (NOW)</span>
              </div>
            </div>

            {/* Time labels below bar */}
            <div className="grid grid-cols-2 gap-4 mt-3 text-xs font-mono">
              <div className="text-left text-neutral-600">
                <strong>Anclas de la Past Sphere:</strong> yesterday, in 1999, five minutes ago, last week, when I arrived.
              </div>
              <div className="text-right text-neutral-600">
                <strong>Anclas de la Pre-Present Sphere:</strong> so far, today, this week, recently, ever, never, since Monday.
              </div>
            </div>
          </div>
        </div>

        {/* Selected Sphere Detail Breakdown */}
        {selectedSphere === 'past' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="border border-neutral-200 p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-neutral-950 uppercase tracking-wider">
                  Tiempos de la Past Time-Sphere
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-300">
                  Desconectados de t₀
                </span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="p-3 border-l-2 border-neutral-900 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>1. Past Simple</span>
                    <button
                      onClick={() => playEnglishAudio("I lived in Madrid in 2018.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Hecho cerrado o estado terminado en un punto concreto: <em>«I lived in Madrid in 2018.»</em>
                  </p>
                </li>
                <li className="p-3 border-l-2 border-neutral-900 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>2. Past Continuous</span>
                    <button
                      onClick={() => playEnglishAudio("I was reading while she was sleeping.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Acción en desarrollo continuo (fondo de la escena): <em>«I was reading while she was sleeping.»</em>
                  </p>
                </li>
                <li className="p-3 border-l-2 border-neutral-900 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>3. Past Perfect</span>
                    <button
                      onClick={() => playEnglishAudio("When I arrived, the train had left.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Anterior a otro evento pasado (el pasado del pasado): <em>«When I arrived, the train had left.»</em>
                  </p>
                </li>
                <li className="p-3 border-l-2 border-neutral-900 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>4. Conditional (Would / Was going to)</span>
                    <button
                      onClick={() => playEnglishAudio("He said he would help me.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Futuro visto desde el pasado: <em>«He said he would help me.»</em>
                  </p>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-5 bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  La Regla Inviolable para Hispanohablantes
                </span>
                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  Si dices CUÁNDO ocurrió, el Present Perfect está PROHIBIDO
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  En español es habitual decir: <em>«Esta mañana he ido al banco»</em> o <em>«Ayer he visto a Juan»</em>. 
                  En inglés estándar, en el momento en que añades <strong>yesterday, last night, 2 hours ago, in 2020</strong>, la acción está expulsada del presente.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold line-through">I have seen him yesterday. ❌</span>
                      <p className="text-[11px] text-rose-700 mt-0.5">Error clásico de interferencia del español.</p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">I saw him yesterday. ✔️</span>
                      <p className="text-[11px] text-emerald-700 mt-0.5">Correcto: Ancla temporal cerrada → Past Simple.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Principio Declerck §3: La Esfera del Pasado no incluye el punto cero temporal (t₀).
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="border border-neutral-200 p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                  El Sector Pre-Presente (Ante-presente)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-rose-50 text-rose-800 border border-rose-200">
                  Toca el momento AHORA
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                El <strong>Present Perfect</strong> no es un tiempo del pasado en la concepción del inglés; es un tiempo de la <strong>Esfera del Presente</strong>. Mira hacia atrás desde el AHORA para ver qué experiencia vital o resultado sigue vigente.
              </p>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="p-3 border-l-2 border-rose-600 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>Experiencia vital acumulada</span>
                    <button
                      onClick={() => playEnglishAudio("I have visited London three times.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <em>«I have visited London three times.»</em> (En toda mi vida hasta hoy; no doy fecha específica).
                  </p>
                </li>
                <li className="p-3 border-l-2 border-rose-600 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>Resultado presente de acción previa</span>
                    <button
                      onClick={() => playEnglishAudio("I have lost my key, so I cannot enter.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <em>«I have lost my key.»</em> (El efecto es presente: sigo sin tener la llave ahora).
                  </p>
                </li>
                <li className="p-3 border-l-2 border-rose-600 bg-neutral-50">
                  <div className="font-bold flex items-center justify-between">
                    <span>Acción continuada hasta ahora</span>
                    <button
                      onClick={() => playEnglishAudio("I have lived here for ten years.")}
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <em>«I have lived here for ten years.»</em> (Empezó hace 10 años y continúo viviendo aquí hoy).
                  </p>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-5 bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                  La Prueba del Algodón para el Estudiante
                </span>
                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  ¿El periodo de tiempo está cerrado o sigue abierto?
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block font-mono">Periodo Abierto (Present Perfect):</span>
                    <p className="text-neutral-600 mt-1">
                      <em>«I have had three cups of coffee today.»</em> (Hoy aún no ha terminado; puedo tomar otra taza).
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block font-mono">Periodo Cerrado (Past Simple):</span>
                    <p className="text-neutral-600 mt-1">
                      <em>«I had three cups of coffee this morning.»</em> (Dicho a las 5 p.m., la mañana ya concluyó por completo).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Principio Declerck §6: El sector pre-presente comparte el punto cero (t₀) con el presente.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bounded vs Unbounded Deep Dive */}
      <div className="border border-neutral-300 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-neutral-900 text-white font-mono text-[11px] font-bold uppercase tracking-widest">
            Aspecto Lingüístico
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            Bounded vs. Unbounded (Delimitado vs. Abierto)
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-neutral-950">
          ¿Acción Cerrada o Acción de Fondo?
        </h3>
        <p className="mt-2 text-sm text-neutral-600 max-w-3xl leading-relaxed">
          En la obra de Declerck, una situación es <strong>Bounded (Delimitada)</strong> si la oración afirma que alcanzó su punto final o término. Es <strong>Unbounded (Abierta)</strong> si describe un proceso en curso o un estado sin punto de corte.
        </p>

        {/* Toggle between Bounded and Unbounded */}
        <div className="flex gap-2 my-6">
          <button
            onClick={() => setAspectMode('bounded')}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border ${
              aspectMode === 'bounded'
                ? 'bg-neutral-950 text-white border-neutral-950'
                : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            Acción Bounded (Delimitada)
          </button>
          <button
            onClick={() => setAspectMode('unbounded')}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider border ${
              aspectMode === 'unbounded'
                ? 'bg-neutral-950 text-white border-neutral-950'
                : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            Acción Unbounded (Abierta / Fondo)
          </button>
        </div>

        {aspectMode === 'bounded' ? (
          <div className="border border-neutral-200 bg-neutral-50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-neutral-900"></span>
              <h4 className="font-bold text-neutral-900 text-sm uppercase font-mono">
                Características de la situación Bounded
              </h4>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Tiene límites de inicio y fin explícitos o implícitos. En un relato, cada evento delimitado se interpreta como <strong>posterior al anterior</strong> (secuenciación cronológica icónica).
            </p>
            <div className="bg-white p-4 border border-neutral-200 font-mono text-xs space-y-2">
              <div className="text-neutral-900 font-bold flex items-center justify-between">
                <span>«John went to the door, opened it, and shouted something.»</span>
                <button
                  onClick={() => playEnglishAudio("John went to the door, opened it, and shouted something.")}
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-neutral-500 text-[11px]">
                Español: Fue a la puerta, la abrió y gritó algo. Cada acción delimitada empuja la narración hacia adelante.
              </p>
            </div>
            <div className="text-xs text-neutral-600">
              <strong>Claves:</strong> Verbos de logro o cumplimiento (accomplishments / achievements), frases como <em>"wrote a letter"</em>, <em>"ran 10 km in an hour"</em>.
            </div>
          </div>
        ) : (
          <div className="border border-neutral-200 bg-neutral-50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-rose-600"></span>
              <h4 className="font-bold text-neutral-900 text-sm uppercase font-mono">
                Características de la situación Unbounded
              </h4>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              No indica su final. Se enfoca en la parte media de la acción (MidS) o en un estado continuo. No empuja la historia hacia adelante, sino que <strong>proporciona el escenario de fondo</strong>.
            </p>
            <div className="bg-white p-4 border border-neutral-200 font-mono text-xs space-y-2">
              <div className="text-neutral-900 font-bold flex items-center justify-between">
                <span>«John was sleeping in the armchair when the telephone rang.»</span>
                <button
                  onClick={() => playEnglishAudio("John was sleeping in the armchair when the telephone rang.")}
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-neutral-500 text-[11px]">
                Español: John estaba durmiendo en el sillón cuando sonó el teléfono. Dormir es el marco continuo (unbounded); el timbrazo es el corte puntual (bounded).
              </p>
            </div>
            <div className="text-xs text-neutral-600">
              <strong>Claves:</strong> Formas en Past Continuous (<em>was sleeping, was working</em>) y verbos de estado permanente (<em>lived, loved, knew</em>).
            </div>
          </div>
        )}
      </div>

      {/* Summary Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-neutral-300 bg-white p-4">
          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">Regla 1</span>
          <h5 className="font-bold text-sm text-neutral-900">Fecha cerrada = Past Simple</h5>
          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
            Yesterday, ago, in 2012, last Friday obligan al Past Simple sin excepciones.
          </p>
        </div>

        <div className="border border-neutral-300 bg-white p-4">
          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">Regla 2</span>
          <h5 className="font-bold text-sm text-neutral-900">Interrupción = Continuous + Simple</h5>
          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
            La acción continua de fondo lleva "was/were -ing" y la que irrumpe lleva Past Simple.
          </p>
        </div>

        <div className="border border-neutral-300 bg-white p-4">
          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">Regla 3</span>
          <h5 className="font-bold text-sm text-neutral-900">El Pasado Previo = Past Perfect</h5>
          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
            Si un hecho ocurrió antes de otro momento del pasado, usa "had + participio".
          </p>
        </div>
      </div>
    </div>
  );
};
