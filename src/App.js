import { Container, Box, Input, Button } from '@mui/material';
import { useState } from 'react';
import "./App.css"

const App = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <Container maxWidth="sm" >
      <Box display="flex" justifyContent="center" alignItems="center">
        <h1>Put it in the Louvre</h1>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Input type="file" onChange={handleChange}/>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop={2}>
        <img src={file} alt="" width="100%"/>

        {/* 
          Add a type of painting (Acrylic on canvas, oil, etc) 
          Add where the gift came from
          Also add the date of today create
        */}

      </Box>
      <Box p={1}>
       <Input type="text" placeholder="Name of the artwork" />
      </Box>
      <Box p={1}>
        <Input type="text" placeholder="Year the artist was born"/>
      </Box>
      <Box p={1}>
        <Input type="text" placeholder="Name of the artist" />
      </Box>
      <Box p={1}>
        <Button variant="outlined">Put it in the Louvre!</Button>
      </Box>
    </Container>
  );
}

export default App;
