import { ReadingExercise } from '../types';

export const READING_EXERCISES: ReadingExercise[] = [
  {
    id: 'reading-1',
    title: 'A Winter Evening at Zurich Station',
    subtitleSpanish: 'Narración cronológica, acciones de fondo y el pasado previo',
    level: 'Intermedio',
    text: `It was a freezing Friday evening in December. Heavy snow was falling across the city, and hundreds of commuters were rushing through the grand concourse of Zurich Hauptbahnhof.

Julian had arrived at the station thirty minutes before his train was due. He felt exhausted because he had worked twelve hours without pause at the engineering firm. While he was waiting on platform 4, he opened his leather briefcase and took out his notebook.

Suddenly, an old school friend tapped him on the shoulder. Julian looked up in surprise. He had not seen Marcus since they graduated from university ten years earlier. They talked warmly about old times until the station announcer declared that the night express to Geneva was entering the track. Julian promised that he would call Marcus the next day, and quickly boarded the train.`,
    annotations: [
      {
        verbPhrase: 'was',
        tense: 'past_simple',
        tenseLabel: 'Past Simple (Stative)',
        spanishTranslation: 'Era / Estaba',
        explanation: 'Verbo de estado en la Esfera del Pasado. Establece el marco general de la situación inicial.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'was falling',
        tense: 'past_continuous',
        tenseLabel: 'Past Continuous',
        spanishTranslation: 'Estaba cayendo',
        explanation: 'Acción en desarrollo en ese momento pasado. Acción abierta (unbounded) que crea la atmósfera.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'were rushing',
        tense: 'past_continuous',
        tenseLabel: 'Past Continuous',
        spanishTranslation: 'Se apresuraban / Corrían',
        explanation: 'Proceso colectivo en curso simultáneo a la caída de nieve. Fondo de la escena.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'had arrived',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'Había llegado',
        explanation: 'Acción anterior a la línea principal de la historia. Llegó antes de los eventos que se van a narrar.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'felt',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Se sintió / Sentía',
        explanation: 'Estado interno puntual en ese momento de la narración.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'had worked',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'Había trabajado',
        explanation: 'Causa previa en el pasado. El trabajo ocurrió ANTES del cansancio que siente ahora en la estación.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'was waiting',
        tense: 'past_continuous',
        tenseLabel: 'Past Continuous',
        spanishTranslation: 'Estaba esperando',
        explanation: 'Acción duradera de fondo introducida por "while", interrumpida por abrir el maletín y sacar la libreta.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'opened',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Abrió',
        explanation: 'Acción puntual delimitada (bounded). Avanza la narración.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'took out',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Sacó',
        explanation: 'Segunda acción de la secuencia consecutiva (abrió → sacó).',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'tapped',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Le tocó / Dio un golpecito',
        explanation: 'Acción puntual repentina que interrumpe la espera de Julian.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'had not seen',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'No había visto',
        explanation: 'Periodo de ausencia que va desde la graduación pasada hasta ese reencuentro en la estación.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'would call',
        tense: 'past_conditional',
        tenseLabel: 'Future in the Past (Conditional)',
        spanishTranslation: 'Llamaría',
        explanation: 'Futuro visto desde el pasado tras un verbo de promesa (said/promised that he would...).',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      }
    ],
    comprehensionQuestions: [
      {
        question: 'Why is "had worked" used instead of "worked" in the second paragraph?',
        options: [
          'Because the work happened during his train trip.',
          'Because the work was an anterior cause that happened before he arrived at the station.',
          'Because it is an action that continues into the present moment.',
          'Because it expresses an unfulfilled wish.'
        ],
        correctIndex: 1,
        explanation: 'El Past Perfect ("had worked") sitúa el turno de trabajo de 12 horas como la causa previa y concluida antes de que Julian estuviera cansado en el andén.'
      },
      {
        question: 'What is the role of "Heavy snow was falling"?',
        options: [
          'A punctual event that stopped Julian from boarding.',
          'A background ongoing process (unbounded) setting the scene.',
          'A habitual routine from his childhood.',
          'An action that will take place tomorrow.'
        ],
        correctIndex: 1,
        explanation: 'El Past Continuous sirve de marco temporal abierto (unbounded) para contextualizar la atmósfera en la que suceden los hechos puntuales.'
      }
    ]
  },
  {
    id: 'reading-2',
    title: 'Two Photographers: Experience vs. Specific Event',
    subtitleSpanish: 'El gran dilema: Present Perfect para experiencia vital vs. Past Simple para hechos fechados',
    level: 'Principiante',
    text: `Elena and Lucas are two wildlife documentary filmmakers. "I have visited forty countries in my life," Elena explained proudly during the interview, "and I have photographed mountain gorillas in Rwanda."

Lucas nodded with admiration. "That sounds remarkable. I went to East Africa three years ago, in 2023. I spent three months in the Serengeti reserve. While I was filming a pride of lions, our jeep broke down. Fortunately, the park rangers arrived twenty minutes later and towed us back to camp."

"Did you take good photographs on that trip?" Elena asked.

"Yes, I took more than five thousand photos, and I even won an international prize for one of them last winter."`,
    annotations: [
      {
        verbPhrase: 'have visited',
        tense: 'past_simple', // contrastive
        tenseLabel: 'Present Perfect (Life Experience)',
        spanishTranslation: 'He visitado',
        explanation: 'Elena habla de su experiencia vital en un periodo abierto que se extiende hasta hoy (Pre-presente). No especifica fecha.',
        timeSphere: 'pre_present_sector',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'have photographed',
        tense: 'past_simple',
        tenseLabel: 'Present Perfect (Life Experience)',
        spanishTranslation: 'He fotografiado',
        explanation: 'Otra experiencia vital en la Esfera del Presente. Sigue viva y puede hacer más fotos.',
        timeSphere: 'pre_present_sector',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'went',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Fui',
        explanation: 'Lucas da una fecha cerrada: "three years ago, in 2023". El inglés exige Past Simple y prohíbe el Present Perfect.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'spent',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Pasé',
        explanation: 'Duración concluida en ese viaje fechado en 2023.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'was filming',
        tense: 'past_continuous',
        tenseLabel: 'Past Continuous',
        spanishTranslation: 'Estaba filmando',
        explanation: 'Acción continua de fondo ("While I was filming...") interrumpida por la avería del todoterreno.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'broke down',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Se averió / Se estropeó',
        explanation: 'Acción puntual que interrumpió el rodaje.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'arrived',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Llegaron',
        explanation: 'Acción con ancla temporal cerrada: "twenty minutes later".',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'won',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Gané',
        explanation: 'Acción con marcador cerrado en el pasado: "last winter" (el invierno pasado).',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      }
    ],
    comprehensionQuestions: [
      {
        question: 'Why does Lucas say "I went to East Africa three years ago" and NOT "I have gone"?',
        options: [
          'Because he went alone without his family.',
          'Because "three years ago" is an anchored past time completely disconnected from the present (t₀).',
          'Because the verb "go" never accepts Present Perfect.',
          'Because he intends to return there soon.'
        ],
        correctIndex: 1,
        explanation: 'Según Declerck, "ago" traslada la orientación obligatoriamente a la Esfera del Pasado. Un hispanohablante nunca debe decir "I have gone 3 years ago".'
      },
      {
        question: 'Why can Elena use "have visited forty countries"?',
        options: [
          'Because she mentions the exact year of each visit.',
          'Because she is talking about her total life experience up to the present moment without giving a finished date.',
          'Because she is still traveling right now at this instant.',
          'Because it expresses regret.'
        ],
        correctIndex: 1,
        explanation: 'Al hablar de experiencias vitales acumuladas ("in my life") sin anclaje en una fecha pasada cerrada, el Present Perfect es la forma idónea.'
      }
    ]
  },
  {
    id: 'reading-3',
    title: 'The Inspector\'s Report: Indirect Speech & Chronology',
    subtitleSpanish: 'Subordinación temporal (Backshift) y reconstrucción forense de los hechos',
    level: 'Avanzado',
    text: `Detective Inspector Miller questioned the caretaker about the art gallery burglary. The caretaker admitted that he had turned off the security cameras at 10 p.m. because an engineer had instructed him to test the system earlier that afternoon.

"I did not realize that the engineer was an impostor," the caretaker stammered.

Miller asked where the night watchman had been during the incident. The caretaker replied that the watchman was patrolling the outer courtyard when the alarms fell silent. He added that the thieves had clearly planned the heist for several months, because they had unlocked the master vault in less than ninety seconds.`,
    annotations: [
      {
        verbPhrase: 'questioned',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Interrogó',
        explanation: 'Verbo introductorio principal en la Esfera del Pasado.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'admitted',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Admitió',
        explanation: 'Acción puntual de declaración en la investigación.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'had turned off',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect (Backshift)',
        spanishTranslation: 'Había apagado',
        explanation: 'Subordinación temporal: apagar las cámaras ocurrió ANTES de la declaración al inspector.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'had instructed',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'Le había dado instrucciones',
        explanation: 'Acontecimiento todavía más antiguo en la cadena temporal (ocurrió por la tarde, antes de apagar las cámaras a las 10 p.m.).',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'was patrolling',
        tense: 'past_continuous',
        tenseLabel: 'Past Continuous (Simultaneous)',
        spanishTranslation: 'Estaba patrullando',
        explanation: 'Acción simultánea al momento del robo en el pasado. Sirve de fondo continuo.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'fell',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Se quedaron / Cayeron',
        explanation: 'Acción puntual delimitada que interrumpe o coincide con el patrullaje.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'had clearly planned',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'Claramente habían planeado',
        explanation: 'Preparativos anteriores a la noche del delito.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'had unlocked',
        tense: 'past_perfect',
        tenseLabel: 'Past Perfect',
        spanishTranslation: 'Habían abierto / desbloqueado',
        explanation: 'Acción anterior al momento del informe del detective.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      }
    ],
    comprehensionQuestions: [
      {
        question: 'Why did the caretaker use "had turned off" instead of "turned off"?',
        options: [
          'Because turning off the cameras took place after Miller asked.',
          'Because the turning off of the cameras was an action anterior to his confession to the inspector.',
          'Because it is an action currently happening.',
          'Because it was an imagined hypothetical condition.'
        ],
        correctIndex: 1,
        explanation: 'En el estilo indirecto con verbo matriz en pasado ("admitted"), los eventos previos a la confesión retroceden a Past Perfect (had + V3).'
      }
    ]
  },
  {
    id: 'reading-4',
    title: 'Summers in Galicia: "Used to" vs. "Would"',
    subtitleSpanish: 'Diferencia crucial entre hábitos repetidos y estados pasados permanentes',
    level: 'Intermedio',
    text: `When my grandfather was a boy, he used to live in a small stone cottage near the Atlantic coast of Galicia. The village was isolated, and nobody in those days had a telephone.

Every July morning, my grandfather would wake up at sunrise. He would run down to the rocky cove with his dog, where they would swim in the cold salt water for hours. He used to be very strong and fearless.

In the afternoons, his grandmother would bake warm cornbread in the wood oven. The whole house would smell of firewood and freshly milled corn. He used to love those quiet rural summers before the modern roads arrived.`,
    annotations: [
      {
        verbPhrase: 'used to live',
        tense: 'used_to_would',
        tenseLabel: 'Used to (Past State)',
        spanishTranslation: 'Solía vivir / Vivía',
        explanation: '"Live" es un estado. Con estados pasados solo se puede usar "used to", NUNCA "would" (*would live es agramatical en este sentido).',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'had',
        tense: 'past_simple',
        tenseLabel: 'Past Simple',
        spanishTranslation: 'Tenía',
        explanation: 'Estado duradero en el pasado ("in those days").',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'would wake up',
        tense: 'used_to_would',
        tenseLabel: 'Would (Repeated Past Action)',
        spanishTranslation: 'Se despertaba / Solía despertarse',
        explanation: 'Acción física repetida de rutina ("Every July morning"). Aquí "would" evoca una costumbre nostálgica perfecta.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'would run',
        tense: 'used_to_would',
        tenseLabel: 'Would (Repeated Past Action)',
        spanishTranslation: 'Corría / Solía correr',
        explanation: 'Acción dinámica repetida en el pasado.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'would swim',
        tense: 'used_to_would',
        tenseLabel: 'Would (Repeated Past Action)',
        spanishTranslation: 'Nadaban',
        explanation: 'Otra acción dinámica habitual en verano.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'used to be',
        tense: 'used_to_would',
        tenseLabel: 'Used to (Past State)',
        spanishTranslation: 'Solía ser / Era',
        explanation: '"Be" es verbo de estado. Obligatoriamente "used to be", nunca *would be para un rasgo de personalidad que cambió.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      },
      {
        verbPhrase: 'would bake',
        tense: 'used_to_would',
        tenseLabel: 'Would (Repeated Action)',
        spanishTranslation: 'Horneaba',
        explanation: 'Acción repetida de la abuela en las tardes de verano.',
        timeSphere: 'past_sphere',
        aspect: 'bounded'
      },
      {
        verbPhrase: 'used to love',
        tense: 'used_to_would',
        tenseLabel: 'Used to (State / Emotion)',
        spanishTranslation: 'Solía amar / Le encantaban',
        explanation: '"Love" es un verbo de emoción/estado. Requiere "used to love", nunca *would love.',
        timeSphere: 'past_sphere',
        aspect: 'unbounded'
      }
    ],
    comprehensionQuestions: [
      {
        question: 'Which of the following sentences is UNGRAMMATICAL according to English rules?',
        options: [
          'My grandfather would wake up early every summer.',
          'My grandfather used to live in a stone cottage.',
          'My grandfather would live in a stone cottage.',
          'My grandfather used to be very strong.'
        ],
        correctIndex: 2,
        explanation: '"Would" solo puede expresar acciones dinámicas repetidas, NUNCA estados pasados como "live", "be", "have" o "know". Con estados solo se admite "used to" o Past Simple.'
      }
    ]
  }
];
