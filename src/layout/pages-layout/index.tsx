import type { ReactNode } from "react";
import { Header } from "@/widgets/header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface PagesLayoutProps {
  children: ReactNode;
}

export const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <>
      <Header />
      <Box mt={2}>
        <Container maxWidth="sm">{children}</Container>
      </Box>
    </>
  );
};
