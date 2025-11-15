import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import type { TestsType, TranslateAndGrammarTest } from "@/app/types/tests";

import { routesEnum } from "@/app/const/routesEnum";
import { PagesLayout } from "@/layout/pages-layout";

const data = [
  {
    id: "1",
    level: "A1",
    question:
      'Choose the correct verb form: "She ___ (to go) to school every day."',
    options: ["go", "goes", "going", "gone"],
    correctAnswer: "goes",
  },
  {
    id: "2",
    level: "A1",
    question:
      "My favorite color is blue. I also like green, but I don't like red.",
    questions: [
      {
        question: "What is the speaker's favorite color?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: "Blue",
      },
      {
        question: "Which color does the speaker not like?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: "Red",
      },
    ],
  },
  {
    id: "3",
    level: "A1",
    question: 'Translate into Russian: "He has a big dog."',
    options: [
      "У него большая собака.",
      "Он имеет большую собаку.",
      "У него есть собака.",
      "Он большой пёс.",
    ],
    correctAnswer: "У него большая собака.",
  },
];

export const Tests = () => {
  const [tests, setTests] = useState<TestsType[] | []>([]);
  const navigate = useNavigate();

  const deleteHandler = (id: string) => {
    setTests((prev) => prev.filter((item) => item.id !== id));
  };

  const clickHandler = () => {
    navigate(routesEnum.TESTS + "/" + routesEnum.NEW_TEST);
  };

  useEffect(() => {
    setTests(data as any);
  }, []);

  return (
    <PagesLayout>
      <List>
        {tests.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <IconButton
                  onClick={() => deleteHandler(item.id)}
                  aria-label="delete"
                  sx={{ mr: 1 }}
                  edge="end"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => navigate(`${routesEnum.TESTS}/${item.id}`)}
                  aria-label="edit"
                  edge="end"
                >
                  <ModeEditIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={item.level} />
            <ListItemText
              secondary={
                (item as TranslateAndGrammarTest).question.substring(0, 20) +
                "..."
              }
            />
          </ListItem>
        ))}
      </List>
      <SpeedDial
        ariaLabel="Add new test"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={clickHandler}
      />
    </PagesLayout>
  );
};
