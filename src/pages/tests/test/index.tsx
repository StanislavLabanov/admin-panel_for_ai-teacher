import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { PagesLayout } from "@/layout/pages-layout";
import { levels, questionTypes } from "./const/listsItems";
import { VariantsList } from "./ui/VariantsList";
import { SelectLevel } from "./ui/SelectLevel";
import { SelectType } from "./ui/SelectType";
import { SelectFile } from "./ui/SelectFile";
import type { VariablesType } from "./types";

export const Test = () => {
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

  useEffect(() => {
    // params[routesEnum.TEST];
    // {
    //   id: "1",
    //   level: "A1",
    //   question:
    //     'Choose the correct verb form: "She ___ (to go) to school every day."',
    //   options: ["go", "goes", "going", "gone"],
    //   correctAnswer: "goes",
    // }
  }, []);

  return (
    <PagesLayout>
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
      <Box sx={{ mt: 2 }}>
        <SelectFile
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </Box>
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
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>
        Создать вопрос
      </Button>
    </PagesLayout>
  );
};
