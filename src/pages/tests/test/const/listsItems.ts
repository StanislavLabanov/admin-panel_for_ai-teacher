export const enum questionTypes {
  TRANSLATE = "TRANSLATE",
  LISTENING = "LISTENING",
  GRAMMAR = "GRAMMAR",
}

export const questionTypesName: Record<questionTypes, string> = {
  [questionTypes.GRAMMAR]: "Грамматика",
  [questionTypes.TRANSLATE]: "Перевод",
  [questionTypes.LISTENING]: "Аудирование",
} as const;

export const enum levels {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
}

export const listTypes = [
  questionTypes.GRAMMAR,
  questionTypes.LISTENING,
  questionTypes.TRANSLATE,
];

export const listLevels = [
  levels.A1,
  levels.A2,
  levels.B1,
  levels.B2,
  levels.C1,
];