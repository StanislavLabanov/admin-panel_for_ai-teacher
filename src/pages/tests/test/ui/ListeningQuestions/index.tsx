import { useMemo, type Dispatch, type SetStateAction } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import type { ListenQuestionsType } from "@/app/types/tests";
import type { ListenQuestionType } from "../../types";
import { ListeningQuestionContent } from "./ListeningQuestionContent";

interface ListeningQuestionsProps {
  setListenQuestions: Dispatch<SetStateAction<ListenQuestionType>>;
  listenQuestions: ListenQuestionType;
}

export const ListeningQuestions = ({
  setListenQuestions,
  listenQuestions,
}: ListeningQuestionsProps) => {
    

  const questionsList = useMemo(
    () => Object.values((item: ListenQuestionsType) => item),
    []
  );

  return (
    <>
      {questionsList.map((item) => (
        <ListeningQuestionContent
          questionContent={item}
          setListenQuestions={setListenQuestions}
          listenQuestions={listenQuestions}
        />
      ))}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton color="primary">
          <AddCircleOutlineIcon fontSize="medium" />
        </IconButton>
      </Box>
    </>
  );
};
