import { memo, type Dispatch, type SetStateAction } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import {
  questionTypesName,
  questionTypes,
  listTypes,
} from "../../const/listsItems";

interface SelectTypeProps {
  selectedType: questionTypes;
  setSelectedType: Dispatch<SetStateAction<questionTypes>>;
}

export const SelectType = memo(
  ({ selectedType, setSelectedType }: SelectTypeProps) => {
    return (
      <FormControl fullWidth>
        <InputLabel id="test-type-select-label">Тип</InputLabel>
        <Select
          labelId="test-type-select-label"
          id="test-type-select-name"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          input={<OutlinedInput label="Type" />}
        >
          {listTypes.map((name) => (
            <MenuItem key={name} value={name}>
              {questionTypesName[name]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);
