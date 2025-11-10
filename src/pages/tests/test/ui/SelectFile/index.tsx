import { memo, type Dispatch, type SetStateAction } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { VisuallyHiddenInput } from "../../const/customHtml";

interface SelectFileProps {
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
}

export const SelectFile = memo(
  ({ selectedFile, setSelectedFile }: SelectFileProps) => {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ overflow: "hidden" }}
        mt={2}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          {selectedFile ? selectedFile?.name : "Загрузить аудио"}
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => setSelectedFile(e.target.files![0])}
          />
        </Button>
      </Box>
    );
  }
);
