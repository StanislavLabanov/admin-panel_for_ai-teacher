import type { ListenQuestionsType } from "@/app/types/tests";

export interface VariablesType {
  variables: string[];
  answer: string;
}

export interface ListenQuestionType {
  [key: string]: ListenQuestionsType[];
}
