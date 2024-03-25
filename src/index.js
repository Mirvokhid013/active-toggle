import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { Box, Container } from "@mui/material";

const root = createRoot(document.getElementById("root"));

root.render(
  <Box>
    <Container>
      <App/>
    </Container>
  </Box>
)