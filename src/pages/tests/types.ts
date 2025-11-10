export interface ListeningQuestion {
  level: string;
  store: string;
  questions: { text: string; options: string[]; answer: string }[];
}

export interface GrammarQuestion {
  level: string;
  question: string;
  options: string[];
  answer: string;
}

export interface TranslateQuestion extends GrammarQuestion {}
