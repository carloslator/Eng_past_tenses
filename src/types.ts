export type PastTenseType =
  | 'past_simple'
  | 'past_continuous'
  | 'past_perfect'
  | 'past_perfect_continuous'
  | 'used_to_would'
  | 'past_conditional';

export type VerbCategory =
  | 'regular_t'       // worked, laughed (ed = /t/)
  | 'regular_d'       // played, lived (ed = /d/)
  | 'regular_id'      // wanted, decided (ed = /ɪd/)
  | 'irregular_vowel' // sing/sang, swim/swam, write/wrote
  | 'irregular_same'  // cut/cut/cut, put/put/put
  | 'irregular_unique'// be/was-were, go/went, do/did
  | 'tricky_pairs';   // lie/lay, rise/raise, fall/feel

export interface Verb {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  spanish: string;
  category: VerbCategory;
  pronunciationEd?: string; // e.g. '/t/', '/d/', '/ɪd/' or vowel note
  patternDescription: string;
  exampleSentence: string;
  exampleSpanish: string;
  tenseUsed: PastTenseType;
}

export interface QuizQuestion {
  id: string;
  category: 'past_vs_perfect' | 'simple_vs_continuous' | 'past_perfect' | 'general_mastery';
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanationSpanish: string;
  declerckNote?: string;
  spanishEquivalent: string;
}

export interface ReadingAnnotation {
  verbPhrase: string;
  tense: PastTenseType;
  tenseLabel: string;
  spanishTranslation: string;
  explanation: string;
  timeSphere: 'past_sphere' | 'pre_present_sector';
  aspect: 'bounded' | 'unbounded';
}

export type VerbAnnotation = ReadingAnnotation;

export interface ReadingExercise {
  id: string;
  title: string;
  subtitleSpanish: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  text: string;
  annotations: ReadingAnnotation[];
  comprehensionQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}
