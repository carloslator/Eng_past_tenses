import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // CATEGORY 1: PAST SIMPLE VS. PRESENT PERFECT
  // ==========================================
  {
    id: 'q1',
    category: 'past_vs_perfect',
    title: 'Marcador temporal cerrado (yesterday)',
    question: 'Choose the correct form: "I _____ the museum yesterday with my family."',
    options: ['have visited', 'visited', 'was visited', 'had visited'],
    correctIndex: 1,
    explanationSpanish: '"Yesterday" es un ancla temporal que pertenece de forma exclusiva a la "Esfera del Pasado" (Past Time-Sphere). En inglés estándar, los marcadores concluidos prohíben el Present Perfect.',
    declerckNote: 'Declerck (1991, cap. 7): El uso de "yesterday" localiza la situación en una zona temporal desconectada de t₀ (el momento del habla). El Present Perfect solo opera en el sector Pre-Presente ligado a t₀.',
    spanishEquivalent: 'Ayer visité el museo con mi familia.'
  },
  {
    id: 'q2',
    category: 'past_vs_perfect',
    title: 'Expresión con "ago" (hace X tiempo)',
    question: 'Select the grammatical sentence: "Carlos _____ his keys twenty minutes ago."',
    options: ['has lost', 'lost', 'had lost', 'was losing'],
    correctIndex: 1,
    explanationSpanish: 'La palabra "ago" siempre sitúa la acción en un punto específico cerrado del pasado. Por tanto, exige Past Simple ("lost") y nunca "has lost".',
    declerckNote: 'A diferencia del español peninsular donde se acepta "he perdido las llaves hace 20 minutos", el inglés trata "ago" como un ancla absoluta del pasado.',
    spanishEquivalent: 'Carlos perdió las llaves hace veinte minutos.'
  },
  {
    id: 'q3',
    category: 'past_vs_perfect',
    title: 'Preguntas con "When" (¿Cuándo?)',
    question: '"_____ you meet your best friend?" — "In 2015 at university."',
    options: ['When have', 'When did', 'When had', 'When do'],
    correctIndex: 1,
    explanationSpanish: 'Las preguntas con "When...?" inquieren sobre un momento temporal específico en el pasado. Se construyen con "When did you...?", nunca con "When have you...?".',
    declerckNote: 'Declerck subraya que "when" pregunta por el TO (punto de orientación) en el pasado; pedir la fecha sitúa la pregunta en THEN y no en NOW.',
    spanishEquivalent: '¿Cuándo conociste a tu mejor amigo?'
  },
  {
    id: 'q4',
    category: 'past_vs_perfect',
    title: 'Experiencia vital abierta ("so far / ever")',
    question: '"She _____ three novels so far this year."',
    options: ['wrote', 'has written', 'had written', 'was writing'],
    correctIndex: 1,
    explanationSpanish: '"So far" (hasta ahora) y "this year" (periodo que aún no ha terminado) indican que la ventana temporal sigue abierta y conectada al presente. Exige Present Perfect ("has written").',
    declerckNote: 'El periodo pre-presente se extiende hasta t₀. Si dijéramos "wrote this year", implicaría que el año o la oportunidad de escribir está cerrado.',
    spanishEquivalent: 'Ha escrito tres novelas en lo que va de año.'
  },
  {
    id: 'q5',
    category: 'past_vs_perfect',
    title: 'Persona fallecida vs. persona viva',
    question: '"Shakespeare _____ many famous plays."',
    options: ['has written', 'wrote', 'had written', 'was writing'],
    correctIndex: 1,
    explanationSpanish: 'Dado que Shakespeare ya falleció, su periodo de actividad vital concluyó en el pasado. No puede situarse en el pre-presente con Present Perfect.',
    declerckNote: 'La regla de existencia del sujeto en Declerck y Chomsky: si el referente del tema no puede actuar en el presente, la situación debe quedar en la Esfera del Pasado.',
    spanishEquivalent: 'Shakespeare escribió muchas obras de teatro famosas.'
  },

  // ==========================================
  // CATEGORY 2: PAST SIMPLE VS. PAST CONTINUOUS
  // ==========================================
  {
    id: 'q6',
    category: 'simple_vs_continuous',
    title: 'Acción de fondo interrumpida',
    question: '"I _____ a book when the electricity suddenly went out."',
    options: ['read', 'was reading', 'have read', 'had read'],
    correctIndex: 1,
    explanationSpanish: 'La acción continua que estaba en marcha (fondo) requiere Past Continuous ("was reading"), mientras que la interrupción puntual va en Past Simple ("went out").',
    declerckNote: 'El Past Continuous es "unbounded" (no delimitado); sirve de marco temporal dentro del cual se incrusta la acción puntual y delimitada ("went out").',
    spanishEquivalent: 'Estaba leyendo un libro cuando la luz se fue de repente.'
  },
  {
    id: 'q7',
    category: 'simple_vs_continuous',
    title: 'Verbo de estado (Stative Verb)',
    question: '"When I met him in Rome, he _____ fluent Italian."',
    options: ['was knowing', 'knew', 'had been knowing', 'knowed'],
    correctIndex: 1,
    explanationSpanish: '"Know" es un verbo de estado (stative verb). Los verbos de estado en inglés no se suelen conjugar en tiempos continuos (*was knowing ❌). En su lugar se usa Past Simple ("knew").',
    declerckNote: 'Los estados ya son de por sí homogéneos e ilimitados en el tiempo analizado; no admiten la focalización de fase media del progresivo.',
    spanishEquivalent: 'Cuando lo conocí en Roma, él sabía italiano fluido.'
  },
  {
    id: 'q8',
    category: 'simple_vs_continuous',
    title: 'Dos acciones paralelas con "while"',
    question: '"While David _____ the dinner, his sister _____ the living room."',
    options: ['cooked / cleaned', 'was cooking / was cleaning', 'has cooked / cleaned', 'had cooked / was cleaning'],
    correctIndex: 1,
    explanationSpanish: 'Cuando dos acciones continuas se desarrollaban simultáneamente en el pasado durante el mismo lapso, ambas se expresan en Past Continuous con "while".',
    declerckNote: 'Ambas situaciones son simultáneas y no delimitadas (unbounded), describiendo dos actividades paralelas en el pasado.',
    spanishEquivalent: 'Mientras David cocinaba la cena, su hermana limpiaba el salón.'
  },
  {
    id: 'q9',
    category: 'simple_vs_continuous',
    title: 'Secuencia narrativa de acciones consecutivas',
    question: '"She opened the front door, _____ inside, and turned on the kitchen lamp."',
    options: ['was stepping', 'stepped', 'had stepped', 'has stepped'],
    correctIndex: 1,
    explanationSpanish: 'En una narración donde una acción ocurre inmediatamente después de otra (abrió, dio un paso, encendió), cada acción terminada va en Past Simple.',
    declerckNote: 'Principio de secuenciación icónica de Declerck: una cadena de situaciones delimitadas (bounded) hace avanzar la línea cronológica paso a paso.',
    spanishEquivalent: 'Abrió la puerta principal, entró y encendió la lámpara de la cocina.'
  },
  {
    id: 'q10',
    category: 'simple_vs_continuous',
    title: 'Hora específica en el pasado',
    question: '"At 8:15 yesterday morning, I _____ to work on the bus."',
    options: ['traveled', 'was traveling', 'had traveled', 'have traveled'],
    correctIndex: 1,
    explanationSpanish: 'A las 8:15 en punto, el viaje ya había empezado y no había concluido; estaba en progreso. Por eso se usa Past Continuous ("was traveling").',
    declerckNote: 'A una hora exacta (punctual TO), el aspecto progresivo indica que el evento envolvía ese instante temporal como marco.',
    spanishEquivalent: 'A las 8:15 de ayer por la mañana, yo estaba viajando al trabajo en autobús.'
  },

  // ==========================================
  // CATEGORY 3: PAST PERFECT & ORDER OF EVENTS
  // ==========================================
  {
    id: 'q11',
    category: 'past_perfect',
    title: 'Acción previa a otra en el pasado',
    question: '"When we got to the cinema, the movie _____ already."',
    options: ['started', 'had started', 'was starting', 'has started'],
    correctIndex: 1,
    explanationSpanish: 'La película empezó ANTES de que llegáramos al cine. La acción más antigua en el pasado debe ir en Past Perfect ("had started").',
    declerckNote: 'El Past Perfect sitúa la situación como anterior al punto de referencia pasado (TO₂ = nuestro momento de llegada).',
    spanishEquivalent: 'Cuando llegamos al cine, la película ya había empezado.'
  },
  {
    id: 'q12',
    category: 'past_perfect',
    title: 'Conjunción temporal "By the time"',
    question: '"By the time the fire brigade arrived, the neighbours _____ the fire."',
    options: ['put out', 'had put out', 'were putting out', 'have put out'],
    correctIndex: 1,
    explanationSpanish: '"By the time" significa "para cuando". Introduce el evento más reciente en Past Simple ("arrived") y la cláusula principal lleva Past Perfect ("had put out").',
    declerckNote: '"By" establece un límite temporal pasado antes del cual la acción ya se había completado.',
    spanishEquivalent: 'Para cuando llegaron los bomberos, los vecinos ya habían extinguido el fuego.'
  },
  {
    id: 'q13',
    category: 'past_perfect',
    title: 'Causa y efecto en el pasado',
    question: '"He couldn\'t pay for his coffee because he _____ his wallet on the desk."',
    options: ['left', 'had left', 'was leaving', 'has left'],
    correctIndex: 1,
    explanationSpanish: 'La acción de olvidar la cartera ocurrió con anterioridad a no poder pagar. Se usa Past Perfect ("had left") para expresar la causa previa.',
    declerckNote: 'La relación causal anterior-posterior se codifica mediante la relación de anterioridad interna del Past Perfect.',
    spanishEquivalent: 'No pudo pagar el café porque había dejado la cartera en el escritorio.'
  },
  {
    id: 'q14',
    category: 'past_perfect',
    title: 'Estilo indirecto y salto temporal (Backshift)',
    question: 'Direct speech: "I have booked the room." → Reported speech: "She told me that she _____ the room."',
    options: ['booked', 'had booked', 'has booked', 'was booking'],
    correctIndex: 1,
    explanationSpanish: 'Al pasar a estilo indirecto con un verbo introductorio en pasado ("told"), el Present Perfect original pasa obligatoriamente a Past Perfect ("had booked").',
    declerckNote: 'Capítulo 4 de Declerck: Subordinación temporal estricta en el estilo indirecto donde el discurso pasa a depender de un verbo en la Esfera del Pasado.',
    spanishEquivalent: 'Ella me dijo que había reservado la habitación.'
  },
  {
    id: 'q15',
    category: 'past_perfect',
    title: 'Past Perfect Continuous (duración previa)',
    question: '"They were exhausted because they _____ for six hours in the snow."',
    options: ['had walked', 'had been walking', 'were walking', 'have walked'],
    correctIndex: 1,
    explanationSpanish: 'Cuando se quiere enfatizar la duración prolongada e ininterrumpida de una actividad previa que provocó un estado visible, se usa Past Perfect Continuous ("had been walking").',
    declerckNote: 'Combina aspecto continuativo con anterioridad respecto al cansancio pasado.',
    spanishEquivalent: 'Estaban agotados porque llevaban seis horas caminando bajo la nieve.'
  },

  // ==========================================
  // CATEGORY 4: GENERAL MASTERY & TRICKY CASES
  // ==========================================
  {
    id: 'q16',
    category: 'general_mastery',
    title: 'Hábito vs. Estado: "Used to" vs. "Would"',
    question: '"When I was a teenager, I _____ in a quiet village near Granada."',
    options: ['used to live', 'would live', 'was living', 'used to living'],
    correctIndex: 0,
    explanationSpanish: '"Live" es un verbo de estado permanente. Con estados pasados SOLO se puede usar "used to", NUNCA "would" (*I would live ❌). "Would" se reserva para acciones repetidas (hacer senderismo, nadar, etc.).',
    declerckNote: '"Would" exige dinamismo iterativo; los estados conceptuales exigen "used to" o Past Simple simple.',
    spanishEquivalent: 'Cuando era adolescente, solía vivir en un pueblo tranquilo cerca de Granada.'
  },
  {
    id: 'q17',
    category: 'general_mastery',
    title: 'Pronunciación de la terminación -ed',
    question: 'In which of these verbs does the "-ed" ending add an EXTRA syllable (/ɪd/)?',
    options: ['worked', 'laughed', 'decided', 'played'],
    correctIndex: 2,
    explanationSpanish: 'La terminación "-ed" solo se pronuncia como sílaba completa (/ɪd/) cuando el verbo base termina en sonido T o D (decide → decided, want → wanted). En worked es /t/ y en played es /d/.',
    declerckNote: 'Decide termina en /d/ fonético; por tanto, decided suma la sílaba /ɪd/.',
    spanishEquivalent: 'decide /dɪˈsaɪd/ → decided /dɪˈsaɪdɪd/ (3 sílabas).'
  },
  {
    id: 'q18',
    category: 'general_mastery',
    title: 'El par engañoso: Lie (recostarse) vs. Lay (poner)',
    question: '"After running the race, the athlete _____ down on the grass to rest."',
    options: ['laid', 'lay', 'lied', 'lain'],
    correctIndex: 1,
    explanationSpanish: 'El verbo intransitivo "lie down" (recostarse/tumbarse) tiene como pasado simple irregular "LAY" (y participio "lain"). "Laid" es el pasado de "lay" (colocar algo, transitivo). "Lied" significa mintió.',
    declerckNote: 'Confusión muy común: lie (recostarse) → lay (pasado) → lain (participio).',
    spanishEquivalent: 'Tras correr la carrera, el atleta se recostó en la hierba para descansar.'
  },
  {
    id: 'q19',
    category: 'general_mastery',
    title: 'El par engañoso: Rise (subir solo) vs. Raise (levantar)',
    question: '"The hot air balloon _____ slowly into the morning sky."',
    options: ['rose', 'raised', 'risen', 'roared'],
    correctIndex: 0,
    explanationSpanish: '"Rise" es intransitivo (el sujeto sube por sí mismo sin objeto directo) y su pasado es "rose". "Raise" es transitivo y regular (someone raised the flag).',
    declerckNote: 'Rise (intransitivo) → rose → risen. Raise (transitivo) → raised → raised.',
    spanishEquivalent: 'El globo aerostático subió lentamente hacia el cielo matutino.'
  },
  {
    id: 'q20',
    category: 'general_mastery',
    title: 'Tercer condicional (Past Perfect + Would have)',
    question: '"If she _____ the train on time, she would not have arrived so late."',
    options: ['caught', 'had caught', 'would catch', 'has caught'],
    correctIndex: 1,
    explanationSpanish: 'En el tercer condicional (situación hipotética no cumplida en el pasado), la cláusula con "if" lleva Past Perfect ("had caught") y la consecuencia lleva "would have + participio".',
    declerckNote: 'Declerck (capítulo 4, secc. 2): La combinación canónica de condicional contrafactual pasado utiliza la forma del pasado más profundo (had + V3) para marcar el alejamiento de la realidad.',
    spanishEquivalent: 'Si ella hubiera tomado el tren a tiempo, no habría llegado tan tarde.'
  }
];
