import { useState } from "react";
import uuid from "react-uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import type { ListenQuestionsType, TestsType } from "@/app/types/tests";
import { levels, questionTypes } from "../../const/listsItems";
import { ListeningQuestions } from "../ListeningQuestions";
import type { ListenQuestionType, VariablesType } from "../../types";
import { VariantsList } from "../VariantsList";
import { SelectLevel } from "../SelectLevel";
import { SelectType } from "../SelectType";
import { SelectFile } from "../SelectFile";

interface QuestionContentProps {
  addQuestionDataHandler: (questionData: TestsType) => void;
}

export const QuestionContent = ({
  addQuestionDataHandler,
}: QuestionContentProps) => {
  const [listenQuestions, setListenQuestions] = useState<ListenQuestionType>(
    {}
  );
  const [selectedType, setSelectedType] = useState<questionTypes>(
    questionTypes.GRAMMAR
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<levels>(levels.A1);
  const [questionText, setQuestionText] = useState<string>("");
  const [variablesList, setVariablesList] = useState<VariablesType>({
    variables: [],
    answer: "",
  });

  const clickHandler = () => {
    if (selectedFile) {
      const questionData = {
        id: uuid(),
        level: selectedLevel,
        question: questionText,
        type: selectedType,
        ...(selectedType === questionTypes.LISTENING
          ? {
              questions: Object.values(listenQuestions).map((item) => item),
            }
          : {
              options: variablesList.variables,
              correctAnswer: variablesList.answer,
            }),
      };

      addQuestionDataHandler(questionData);
    }
  };

  return (
    <>
      <SelectLevel
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <Box sx={{ mt: 2 }}>
        <SelectType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </Box>
      {selectedType === questionTypes.LISTENING ? (
        <>
          <Box sx={{ mt: 2 }}>
            <SelectFile
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </Box>
          <ListeningQuestions
            listenQuestions={listenQuestions}
            setListenQuestions={setListenQuestions}
          />
        </>
      ) : (
        <>
          <TextField
            onChange={(e) => setQuestionText(e.target.value)}
            label="Текст вопроса"
            variant="outlined"
            value={questionText}
            fullWidth
            sx={{ mt: 2 }}
          />
          <VariantsList
            variablesList={variablesList}
            setVariablesList={setVariablesList}
          />
        </>
      )}
      <Button
        variant="contained"
        onClick={clickHandler}
        fullWidth
        sx={{ mt: 2 }}
      >
        Добавить данные вопроса
      </Button>
    </>
  );
};
