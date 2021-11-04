import { Container, Box, Input, Button } from '@mui/material';
import { useState } from 'react';
import "./App.css"

const App = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]))
  }
  
  /**
   * TODO:
   * Add type of painting (randomized), Acrylic on canvas, oil, etc
   * Add where the painting came from (randomized)
   * Also add the year of created
   * 
   * Image CSS organization
   * Add picture frame around the image
   * Add the "paper-like" museum portion
   * Figure out ratios and where to put paper item
   * Downloadable image
   * 
   * Pretty it up
   * Transitions and animations
   */

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
