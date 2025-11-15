import { useState, type Dispatch, type SetStateAction } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

import type { ListenQuestionsType } from "@/app/types/tests";
import type { ListenQuestionType, VariablesType } from "../../../types";
import { VariantsList } from "../../VariantsList";
import uuid from "react-uuid";

interface ListeningQuestionContentProps {
  questionContent: ListenQuestionsType;
  setListenQuestions: Dispatch<SetStateAction<ListenQuestionType>>;
  listenQuestions: ListenQuestionType;
}

export const ListeningQuestionContent = ({
  setListenQuestions,
  // listenQuestions,
  questionContent,
}: ListeningQuestionContentProps) => {
  const [value, setValue] = useState<string>("");
  const [variablesList, setVariablesList] = useState<VariablesType>({
    variables: [],
    answer: "",
  });

  const switchHandler = () => {
    const genId = uuid();
    setListenQuestions((prev) => ({
      ...prev,
      [genId]: {
        id: genId,
        question: value,
        options: variablesList.variables,
        correctAnswer: variablesList.answer,
      } as ListenQuestionsType,
    }) as any);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={questionContent.question}
        >
          <Typography component="span">{questionContent.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            onChange={(e) => setValue(e.target.value)}
            label="Текст вопроса"
            variant="outlined"
            value={value}
            fullWidth
            sx={{ mt: 2 }}
          />
          <VariantsList
            variablesList={variablesList}
            setVariablesList={setVariablesList}
          />
        </AccordionDetails>
      </Accordion>
      <Switch
        edge="end"
        onChange={switchHandler}
        checked={variablesList.answer === ''}
      />
    </>
  );
};
