import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import type { TestsType, TranslateAndGrammarTest } from "@/app/types/tests";
import { questionTypes } from "../../const/listsItems";
import { QuestionContent } from "../QuestionContent";

export const TestContent = () => {
  const [questions, setQuestions] = useState<TestsType[]>([]);
  // const [loading, setLoading] = useState(false);

  const addQuestionDataHandler = (questionData: TestsType) => {
    setQuestions((prev) => [...prev, questionData]);
  };

  const clickHandler = () => {
    /// setLoading(true)
    /// request
  };

  return (
    <>
      {questions.length ? (
        questions.map((item) => (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id={item.id}>
              <Typography component="span">
                {item.type === questionTypes.LISTENING
                  ? item.id
                  : (item as TranslateAndGrammarTest).question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <QuestionContent
                addQuestionDataHandler={addQuestionDataHandler}
              />
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Создать вопрос
              </Button>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography>В тесте нет вопросов</Typography>
      )}
      <Button
        onClick={clickHandler}
        // disabled={loading}
        variant="contained"
        sx={{ mt: 2 }}
        fullWidth
      >
        Сохранить тест
      </Button>
    </>
  );
};
