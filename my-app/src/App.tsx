import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Box } from "@mui/material";
import CardContainer from "./components/CardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="space-between" width="100%" height="100%">
      <Box display="flex" justifyContent="center" height="60vh" mt={2}>
        <Card suit="khaj" value="5" hidden />
        <Card suit="khesht" value="6" hidden />
        <Card suit="hearts" value="7" hidden />
        <Card suit="pick" value="A" hidden />
      </Box>
      <Box position="relative" display="flex" alignItems="center" width="100%" height="50%">
        <CardContainer>
          <Box display="flex" alignItems="center" width="100%">
            <Card suit="khaj" value="5" />
            <Card suit="khesht" value="6" />
            <Card suit="hearts" value="7" />
            <Card suit="pick" value="A" />
            <Card suit="khaj" value="5" />
            <Card suit="khesht" value="6" />
            <Card suit="hearts" value="7" />
            <Card suit="pick" value="A" />
            <Card suit="khaj" value="5" />
            <Card suit="khesht" value="6" />
            <Card suit="hearts" value="7" />
            <Card suit="pick" value="A" />
            <Card suit="pick" value="A" />
          </Box>
        </CardContainer>
      </Box>
    </Box>
  );
}

export default App;
