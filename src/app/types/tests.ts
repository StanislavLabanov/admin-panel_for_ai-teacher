import type { questionTypes } from "@/pages/tests/test/const/listsItems";

export type ListenQuestionsType = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export interface ListeningTest {
  id: string;
  level: string;
  type: questionTypes;
  questions: ListenQuestionsType[];
}

export interface TranslateAndGrammarTest {
  id: string;
  level: string;
  type: questionTypes;
  question: string;
  options: string[];
  correctAnswer: string;
}

export type TestsType = ListeningTest | TranslateAndGrammarTest;
