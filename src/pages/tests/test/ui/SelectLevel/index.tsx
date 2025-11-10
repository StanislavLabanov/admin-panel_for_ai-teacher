import { memo, type Dispatch, type SetStateAction } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { levels, listLevels } from "../../const/listsItems";

interface SelectLevelProps {
  selectedLevel: levels;
  setSelectedLevel: Dispatch<SetStateAction<levels>>;
}

export const SelectLevel = memo(
  ({ selectedLevel, setSelectedLevel }: SelectLevelProps) => {
    return (
      <FormControl fullWidth sx={{ marginTop: "15px" }}>
        <InputLabel id="level-select-label">Уровень</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select-name"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          input={<OutlinedInput label="Level" />}
        >
          {listLevels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);
