
import { useState } from "react"
import { Typography,Box,Container } from "@mui/material"
import SelectLevel from "./components/SelectLevel"
import ListCard from "./components/ListCard"
import { StoreProvider } from 'easy-peasy';
import store from "./store"
function App() {
  
  return (
    <StoreProvider store={store}>
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh' }} >
        <Typography align="center" variant="h3" gutterBottom>
        Kanji & Vocabulary
      </Typography>
      <SelectLevel></SelectLevel>
      <ListCard />
        </Box>
    </Container>
    </StoreProvider>
  )
}

export default App
