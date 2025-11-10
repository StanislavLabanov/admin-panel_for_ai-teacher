import { memo, useState, type Dispatch, type SetStateAction } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import type { VariablesType } from "../../types";

interface VariantsListProps {
  setVariablesList: Dispatch<SetStateAction<VariablesType>>;
  variablesList: VariablesType;
}

export const VariantsList = memo(
  ({ setVariablesList, variablesList }: VariantsListProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
    const [value, setValue] = useState<string>("");

    const selectAnswerHandler = (item: string) => {
      setVariablesList((prev) => ({ ...prev, answer: item }));
    };

    const addNewVariantHandler = () => {
      if (value) {
        setVariablesList((prev) => ({
          ...prev,
          variables: [...prev.variables, value],
        }));
        setAnchorEl(null);
        setValue("");
      }
    };

    const deleteHandler = (item: string) => {
      setVariablesList((prev) => ({
        ...prev,
        variables: prev.variables.filter((el) => el !== item),
      }));
    };

    return (
      <>
        <List sx={{ width: "100%" }}>
          {variablesList.variables.map((item) => (
            <ListItem
              key={item}
              disableGutters
              secondaryAction={
                <>
                  <IconButton
                    onClick={() => deleteHandler(item)}
                    aria-label="delete"
                    sx={{ mr: 1 }}
                    edge="end"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Switch
                    edge="end"
                    onChange={() => selectAnswerHandler(item)}
                    checked={variablesList.answer === item}
                  />
                </>
              }
            >
              <ListItemText primary={`Line item ${item}`} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            color="primary"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <AddCircleOutlineIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 2,
            }}
          >
            <TextField
              variant="standard"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <IconButton
              color="primary"
              sx={{ ml: 2 }}
              onClick={addNewVariantHandler}
            >
              <CheckCircleOutlineIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Popover>
      </>
    );
  }
);
