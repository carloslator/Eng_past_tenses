export interface GrammarTopic {
  id: string;
  title: string;
  tag: string;
  summary: string;
  formula: {
    affirmative: string;
    negative: string;
    question: string;
  };
  spanishComparison: string;
  declerckInsight: string;
  keySignals: string[];
  rules: {
    rule: string;
    explanation: string;
    exampleEn: string;
    exampleEs: string;
    wrongEn?: string;
  }[];
}

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'past_simple',
    title: 'Past Simple (Pasado Simple)',
    tag: 'El pilar del pasado',
    summary: 'Se utiliza para hechos, acciones concluidas y estados puntuales que ocurrieron en la "Esfera del Pasado", completamente desvinculados del presente.',
    formula: {
      affirmative: 'Sujeto + Verbo en pasado (V2: -ed o irregular)',
      negative: 'Sujeto + did not (didn\'t) + Verbo en infinitivo sin to',
      question: 'Did + Sujeto + Verbo en infinitivo sin to?'
    },
    spanishComparison: 'Equivale casi siempre al Pretérito Indefinido (hizo, fue, comió). También al Pretérito Imperfecto cuando describe hábitos o estados terminados (vivía en Madrid en 1990).',
    declerckInsight: 'Según el Prof. Declerck, el Past Simple sitúa la situación en la Past Time-Sphere (Esfera del Pasado). Cuando la acción está delimitada (bounded), hace avanzar la narración paso a paso cronológicamente.',
    keySignals: ['yesterday', 'last night / week / month / year', 'two days ago', 'in 1998', 'when I was a child', 'just now (US)'],
    rules: [
      {
        rule: 'Acción terminada en momento específico',
        explanation: 'En cuanto mencionas cuándo ocurrió en el pasado (yesterday, last year, ago), el Past Simple es OBLIGATORIO en inglés.',
        exampleEn: 'I visited the Prado Museum last Monday.',
        exampleEs: 'Visité el Museo del Prado el lunes pasado.',
        wrongEn: 'I have visited the Prado Museum last Monday. (INCORRECTO en inglés estándar)'
      },
      {
        rule: 'Preguntas con "When?" (¿Cuándo?)',
        explanation: 'Como preguntar "¿cuándo?" busca un punto de anclaje temporal pasado, casi siempre exige Past Simple y no Present Perfect.',
        exampleEn: 'When did you arrive at the hotel?',
        exampleEs: '¿Cuándo llegaste al hotel?',
        wrongEn: 'When have you arrived? (INCORRECTO)'
      },
      {
        rule: 'Secuencia de eventos (Iconic sequencing)',
        explanation: 'Varias acciones breves y consecutivas que narran una historia se expresan todas en Past Simple.',
        exampleEn: 'He opened the door, turned on the light, and saw the letter.',
        exampleEs: 'Abrió la puerta, encendió la luz y vio la carta.'
      },
      {
        rule: 'El auxiliar "did" absorbe el tiempo',
        explanation: 'En oraciones negativas e interrogativas, "did" ya indica el pasado. El verbo principal se queda en su forma base (infinitivo sin to).',
        exampleEn: 'She didn\'t go to the party. / Did you see him?',
        exampleEs: 'Ella no fue a la fiesta. / ¿Lo viste?',
        wrongEn: 'She didn\'t went. / Did you saw him? (ERRORES GRAVES)'
      }
    ]
  },
  {
    id: 'past_continuous',
    title: 'Past Continuous (Pasado Continuo)',
    tag: 'La acción en desarrollo',
    summary: 'Describe una acción que estaba en curso en un momento determinado del pasado. Actúa como el "fondo" o escenario sobre el que ocurre otro acontecimiento.',
    formula: {
      affirmative: 'Sujeto + was/were + Verbo-ing',
      negative: 'Sujeto + was not (wasn\'t) / were not (weren\'t) + Verbo-ing',
      question: 'Was/Were + Sujeto + Verbo-ing?'
    },
    spanishComparison: 'Equivale exactamente a "estaba + gerundio" (estaba comiendo, estábamos durmiendo) o al Pretérito Imperfecto de continuidad (yo leía mientras él cocinaba).',
    declerckInsight: 'Declerck clasifica el Past Continuous como "unbounded" (abierto/no delimitado). Enfoca la parte media de la situación (MidS) y prescinde intencionadamente de su principio o final.',
    keySignals: ['while (mientras)', 'as (mientras/a medida que)', 'at 8:00 yesterday', 'all morning / all night', 'when + Past Simple'],
    rules: [
      {
        rule: 'Acción de fondo interrumpida por un evento puntual',
        explanation: 'La acción larga y continua va en Past Continuous (con while); la acción que interrumpe va en Past Simple (con when).',
        exampleEn: 'I was sleeping when the alarm suddenly rang.',
        exampleEs: 'Estaba durmiendo cuando la alarma sonó repentinamente.'
      },
      {
        rule: 'Dos acciones paralelas simultáneas',
        explanation: 'Cuando dos procesos ocurrían al mismo tiempo durante un periodo, ambos usan Past Continuous unidos por "while".',
        exampleEn: 'While Maria was cooking, Carlos was setting the table.',
        exampleEs: 'Mientras María estaba cocinando, Carlos estaba poniendo la mesa.'
      },
      {
        rule: 'Momento específico en el pasado',
        explanation: 'A una hora exacta del pasado, la acción ya había comenzado y no había terminado.',
        exampleEn: 'At 10:30 last night, we were watching a movie.',
        exampleEs: 'A las 10:30 de anoche, estábamos viendo una película.'
      },
      {
        rule: 'Verbos de estado (Stative Verbs)',
        explanation: 'Verbos de sentimiento, posesión o conocimiento (know, understand, want, like, belong) no suelen usarse en continuo.',
        exampleEn: 'I knew the answer. (Correcto)',
        exampleEs: 'Yo sabía la respuesta.',
        wrongEn: 'I was knowing the answer. (INCORRECTO)'
      }
    ]
  },
  {
    id: 'past_perfect',
    title: 'Past Perfect (Pluscuamperfecto)',
    tag: 'El pasado del pasado',
    summary: 'Indica una acción completada antes de otro momento o acción en el pasado. Establece el orden cronológico cuando los eventos no se narran en orden natural.',
    formula: {
      affirmative: 'Sujeto + had + Participio pasado (V3)',
      negative: 'Sujeto + had not (hadn\'t) + Participio pasado (V3)',
      question: 'Had + Sujeto + Participio pasado (V3)?'
    },
    spanishComparison: 'Equivale directamente al Pretérito Pluscuamperfecto en español: "había comido", "había llegado", "habían salido".',
    declerckInsight: 'En la teoría de Declerck, el Past Perfect expresa una relación de anterioridad interna dentro del dominio del pasado respecto a un TO₂ (punto de referencia pasado). Si la conjunción (como after) ya aclara el orden, a veces se permite la simplificación al Past Simple.',
    keySignals: ['already (ya)', 'before (antes de)', 'after (después de que)', 'by the time (para cuando)', 'until then (hasta entonces)'],
    rules: [
      {
        rule: 'Acción anterior a otro evento pasado',
        explanation: 'De dos acontecimientos pasados, el que sucedió primero lleva Past Perfect (had + V3).',
        exampleEn: 'When we arrived at the cinema, the film had already started.',
        exampleEs: 'Cuando llegamos al cine, la película ya había empezado.'
      },
      {
        rule: 'Con "by the time" (para cuando)',
        explanation: '"By the time" introduce la segunda acción (en Past Simple); la cláusula principal lleva Past Perfect.',
        exampleEn: 'By the time the ambulance arrived, the neighbours had helped him.',
        exampleEs: 'Para cuando llegó la ambulancia, los vecinos ya lo habían ayudado.'
      },
      {
        rule: 'Causa y efecto en el pasado',
        explanation: 'Explica la causa pasada de una situación o emoción en el pasado.',
        exampleEn: 'He was exhausted because he had worked for 14 hours.',
        exampleEs: 'Estaba exhausto porque había trabajado durante 14 horas.'
      },
      {
        rule: 'Estilo indirecto (Backshift)',
        explanation: 'En las citas indirectas, un Present Perfect o Past Simple original pasa obligatoriamente a Past Perfect tras un verbo introductor en pasado.',
        exampleEn: 'She said: "I have lost my key." → She said she had lost her key.',
        exampleEs: 'Dijo: "He perdido mi llave" → Dijo que había perdido su llave.'
      }
    ]
  },
  {
    id: 'past_perfect_continuous',
    title: 'Past Perfect Continuous (Pluscuamperfecto Continuo)',
    tag: 'Duración previa en el pasado',
    summary: 'Destaca la duración e insistencia de una acción continua que se estaba desarrollando antes de que otro acontecimiento del pasado tuviera lugar.',
    formula: {
      affirmative: 'Sujeto + had been + Verbo-ing',
      negative: 'Sujeto + had not (hadn\'t) been + Verbo-ing',
      question: 'Had + Sujeto + been + Verbo-ing?'
    },
    spanishComparison: 'Equivale a construcciones como "llevaba [tiempo] haciendo algo cuando..." o "había estado [haciendo algo]".',
    declerckInsight: 'Combina la anterioridad del Past Perfect con la cualidad "unbounded" (en progreso continuo) del aspecto progresivo antes de un punto de corte temporal en el pasado.',
    keySignals: ['for two hours when...', 'since morning when...', 'all afternoon before...'],
    rules: [
      {
        rule: 'Duración de un proceso hasta un punto pasado',
        explanation: 'Muestra cuánto tiempo llevaba desarrollándose una actividad antes de que ocurriera otro suceso.',
        exampleEn: 'They had been driving for five hours before they found a petrol station.',
        exampleEs: 'Llevaban cinco horas conduciendo antes de encontrar una gasolinera.'
      },
      {
        rule: 'Efecto visible o consecuencia en el pasado',
        explanation: 'Explica el resultado tangible de una actividad recién terminada en el pasado.',
        exampleEn: 'Her eyes were red because she had been crying.',
        exampleEs: 'Sus ojos estaban rojos porque había estado llorando.'
      }
    ]
  },
  {
    id: 'used_to_would',
    title: 'Habits in the Past: "Used to" vs. "Would"',
    tag: 'Costumbres pasadas',
    summary: 'Cómo expresar hábitos, rutinas y estados pasados que ya no ocurren en el presente. Una de las diferencias clave entre inglés y español.',
    formula: {
      affirmative: 'Used to + Verbo base  |  Would + Verbo base de acción',
      negative: 'Didn\'t use to + Verbo base',
      question: 'Did you use to + Verbo base?'
    },
    spanishComparison: 'Ambos se traducen habitualmente por el Pretérito Imperfecto (yo jugaba, solía vivir, íbamos al parque).',
    declerckInsight: '"Used to" representa un hábito o estado anterior a t₀ (ahora). "Would" añade un matiz de rememoración nostálgica o previsibilidad típica en el pasado, pero está prohibido con verbos de estado.',
    keySignals: ['when I was young', 'in those days', 'back then', 'every summer'],
    rules: [
      {
        rule: '"Used to" funciona tanto con ACCIONES como con ESTADOS',
        explanation: 'Puedes usar "used to" para hábitos y para situaciones permanentes que cambiaron.',
        exampleEn: 'I used to live in Barcelona. / I used to play basketball.',
        exampleEs: 'Solía vivir en Barcelona (estado). / Solía jugar al baloncesto (hábito).'
      },
      {
        rule: '"Would" SOLO se usa para ACCIONES REPETIDAS, NUNCA para estados',
        explanation: '¡Regla de oro! No puedes usar "would" con verbos como live, be, have, know, believe.',
        exampleEn: 'Every summer, grandfather would take us fishing. (Correcto: acción)',
        exampleEs: 'Cada verano, el abuelo nos llevaba a pescar.',
        wrongEn: 'I would live in Barcelona when I was a child. (INCORRECTO: es un estado)'
      },
      {
        rule: 'Negación e interrogación de "Used to"',
        explanation: 'En negativa es "didn\'t use to" (sin d final) y en pregunta "Did you use to...?"',
        exampleEn: 'I didn\'t use to like olives when I was little.',
        exampleEs: 'No solían gustarme las aceitunas cuando era pequeño.'
      }
    ]
  },
  {
    id: 'past_conditional',
    title: 'Future in the Past & Past Conditionals',
    tag: 'Futuro en el pasado e hipótesis',
    summary: 'Cómo se expresa el futuro visto desde el pasado ("was going to", "would") y situaciones hipotéticas que no llegaron a realizarse ("would have done").',
    formula: {
      affirmative: 'Was/Were going to + V1  |  Would have + V3',
      negative: 'Was/Were not going to + V1  |  Wouldn\'t have + V3',
      question: 'Were you going to + V1?  |  Would you have + V3?'
    },
    spanishComparison: '"Was going to" = iba a hacer algo. "Would have + V3" = habría/hubiera hecho algo (Condicional compuesto).',
    declerckInsight: 'Declerck destaca cómo el inglés distingue entre una expectativa ("was going to" = futuro de causa o intención presente en ese momento) y un hecho posterior en la narración ("twenty years later, he would become president").',
    keySignals: ['if I had known', 'but I forgot', 'intended to', 'two years later he would...'],
    rules: [
      {
        rule: '"Was/Were going to" para intenciones no cumplidas',
        explanation: 'Expresa planes o intenciones que se tenían en el pasado pero que por algún motivo se frustraron.',
        exampleEn: 'I was going to call you last night, but my phone battery died.',
        exampleEs: 'Iba a llamarte anoche, pero se me agotó la batería del móvil.'
      },
      {
        rule: '"Third Conditional" (Tercer Condicional)',
        explanation: 'Hipótesis sobre el pasado imposible de cambiar: If + Past Perfect, Sujeto + would have + Participio.',
        exampleEn: 'If I had studied harder, I would have passed the exam.',
        exampleEs: 'Si hubiera/hubiese estudiado más, habría aprobado el examen.'
      },
      {
        rule: '"Would" como futuro en el pasado en biografías y relatos',
        explanation: 'Para hechos que estaban destinados a suceder más adelante en una narración histórica.',
        exampleEn: 'He arrived in Paris in 1920. Three years later, he would publish his first masterpiece.',
        exampleEs: 'Llegó a París en 1920. Tres años más tarde, publicaría su primera obra maestra.'
      }
    ]
  }
];

export interface DeclerckSpherePrinciple {
  title: string;
  sphere: 'past_sphere' | 'present_sphere';
  anchor: string;
  tensesIncluded: string[];
  keyConcept: string;
  spanishLearnerTrap: string;
  solution: string;
}

export const DECLERCK_SPHERES: DeclerckSpherePrinciple[] = [
  {
    title: 'The Past Time-Sphere (La Esfera del Pasado)',
    sphere: 'past_sphere',
    anchor: 'Completamente anterior al momento del habla (t₀). Desconectado del AHORA.',
    tensesIncluded: ['Past Simple (Preterit)', 'Past Continuous', 'Past Perfect', 'Past Conditional (would)'],
    keyConcept: 'El hablante se sitúa mentalmente en el pasado ("THEN"). No importa la distancia objetiva (pueden ser 2 segundos o 2.000 años), sino que el periodo temporal está CERRADO y desligado del presente.',
    spanishLearnerTrap: 'El error de usar Present Perfect con marcadores temporales concluidos: "I have seen him yesterday" o "I have called him 5 minutes ago".',
    solution: 'Si hay un ancla temporal cerrada (yesterday, ago, last week, in 2010), el inglés exige obligatoriamente Past Simple: "I saw him yesterday", "I called him 5 minutes ago".'
  },
  {
    title: 'The Present Time-Sphere & Pre-Present Sector (La Esfera del Presente)',
    sphere: 'present_sphere',
    anchor: 'Incluye o toca el momento del habla (t₀). Conectado al AHORA.',
    tensesIncluded: ['Present Simple', 'Present Continuous', 'Present Perfect (Ante-presente)'],
    keyConcept: 'El sector "Pre-Presente" abarca el periodo que va desde el pasado hasta el momento presente ("Before-NOW"). Se usa para experiencias vitales, noticias recientes o estados que continúan.',
    spanishLearnerTrap: 'Confundir experiencias abiertas con hechos fechados: En español peninsular se dice "Hoy he trabajado mucho" y también "Ayer he comido con Juan". En inglés británico y americano, "yesterday" nunca puede entrar aquí.',
    solution: 'Usa Present Perfect SOLO cuando el periodo sigue abierto (today, this week, so far, recently) o la experiencia cuenta para el presente: "I have lived here for 3 years" (y sigo viviendo aquí).'
  }
];

export interface SpanishVsEnglishComparison {
  spanishForm: string;
  spanishTense: string;
  englishDefault: string;
  englishTense: string;
  explanation: string;
  exampleEs: string;
  exampleEn: string;
}

export const SPANISH_ENGLISH_PAST_COMPARISONS: SpanishVsEnglishComparison[] = [
  {
    spanishForm: 'comí / hablé / fui',
    spanishTense: 'Pretérito Indefinido (Perfecto Simple)',
    englishDefault: 'I ate / I spoke / I went',
    englishTense: 'Past Simple',
    explanation: 'Acción terminada en un momento definido del pasado, sin conexión con el presente.',
    exampleEs: 'Ayer comí paella con mi familia.',
    exampleEn: 'Yesterday I ate paella with my family.'
  },
  {
    spanishForm: 'comía / hablaba / iba (hábito o descripción)',
    spanishTense: 'Pretérito Imperfecto (hábito/estado)',
    englishDefault: 'I used to eat / I worked / I had',
    englishTense: 'Used to + V1 o Past Simple',
    explanation: 'Si es una costumbre que ya no existe, se usa "used to". Si es un estado descriptivo en el pasado, se usa el Past Simple.',
    exampleEs: 'Cuando era niño, vivía en Valencia y solía jugar al tenis.',
    exampleEn: 'When I was a child, I lived in Valencia and used to play tennis.'
  },
  {
    spanishForm: 'estaba comiendo / estaba hablando',
    spanishTense: 'Pretérito Imperfecto continuo',
    englishDefault: 'I was eating / I was speaking',
    englishTense: 'Past Continuous',
    explanation: 'Acción en progreso en un momento concreto o que sirve de fondo a otra acción.',
    exampleEs: 'Estaba cenando cuando sonó el timbre.',
    exampleEn: 'I was having dinner when the doorbell rang.'
  },
  {
    spanishForm: 'he comido / he hablado / he ido',
    spanishTense: 'Pretérito Perfecto Compuesto',
    englishDefault: 'I have eaten (si el periodo sigue abierto) / I ate (si está cerrado)',
    englishTense: 'Present Perfect o Past Simple',
    explanation: '¡Atención! En España se dice "Esta mañana he ido al médico". En inglés, si la mañana ya terminó para el hablante, se usa Past Simple: "I went to the doctor this morning". Si el periodo sigue abierto: "I have seen him today".',
    exampleEs: 'He visitado Roma tres veces (en mi vida).',
    exampleEn: 'I have visited Rome three times (in my life).'
  },
  {
    spanishForm: 'había comido / había hablado',
    spanishTense: 'Pretérito Pluscuamperfecto',
    englishDefault: 'I had eaten / I had spoken',
    englishTense: 'Past Perfect',
    explanation: 'Correspondencia directa al 100%: acción anterior a otro evento pasado.',
    exampleEs: 'Cuando llegué a la estación, el tren ya se había marchado.',
    exampleEn: 'When I reached the station, the train had already departed.'
  },
  {
    spanishForm: 'llevaba dos horas esperando',
    spanishTense: 'Llevar + gerundio en imperfecto',
    englishDefault: 'I had been waiting for two hours',
    englishTense: 'Past Perfect Continuous',
    explanation: 'El inglés no usa el verbo "llevar" para tiempo. Emplea el Past Perfect Continuous con la preposición "for".',
    exampleEs: 'Llevaba tres horas conduciendo cuando se pinchó la rueda.',
    exampleEn: 'I had been driving for three hours when the tyre burst.'
  }
];

export const REGULAR_ED_PRONUNCIATION_RULES = [
  {
    sound: '/t/',
    label: 'Sonido "T" seco',
    rule: 'Después de consonantes sordas (voiceless sounds): /p/, /k/, /s/, /ʃ/ (sh), /tʃ/ (ch), /f/.',
    howToProduce: 'Tus cuerdas vocales NO vibran al final de la palabra base. La terminación -ed sale como una "t" nítida y NO agrega ninguna sílaba.',
    verbs: ['ask → asked (áskt)', 'cook → cooked (kʊkt)', 'dance → danced (dænst)', 'help → helped (hɛlpt)', 'laugh → laughed (læft)', 'stop → stopped (stɒpt)', 'wash → washed (wɒʃt)', 'work → worked (wɜːkt)'],
    warning: 'NUNCA digas "wórr-ked" ni "kú-ked". Sigue siendo una sola sílaba.'
  },
  {
    sound: '/d/',
    label: 'Sonido "D" suave',
    rule: 'Después de vocales y consonantes sonoras (voiced sounds): /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/.',
    howToProduce: 'Tus cuerdas vocales SÍ vibran al final del verbo. La terminación -ed es una "d" suave y suavemente ligada, SIN añadir sílaba extra.',
    verbs: ['arrive → arrived (əˈraɪvd)', 'clean → cleaned (kliːnd)', 'enjoy → enjoyed (ɪnˈdʒɔɪd)', 'live → lived (lɪvd)', 'open → opened (ˈoʊpənd)', 'play → played (pleɪd)', 'rain → rained (reɪnd)', 'stay → stayed (steɪd)'],
    warning: 'No añadas la vocal española "e". Di "pleyd", no "play-ed".'
  },
  {
    sound: '/ɪd/',
    label: 'Sílaba extra "ID"',
    rule: 'ÚNICAMENTE después de verbos que terminan fonéticamente en sonido /t/ o /d/.',
    howToProduce: 'Como ya terminan en t o d, es físicamente imposible pronunciar otra t o d pegada sin intercalar una vocal. Por eso aquí SÍ se añade una sílaba completa: /ɪd/.',
    verbs: ['decide → decided (de-ci-ded)', 'need → needed (nee-ded)', 'start → started (star-ted)', 'visit → visited (vi-si-ted)', 'wait → waited (wai-ted)', 'want → wanted (wan-ted)'],
    warning: 'Este es el ÚNICO caso donde la terminación -ed se pronuncia como sílaba independiente.'
  }
];
