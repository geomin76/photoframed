import { Container, Box, Input, Button } from '@mui/material';
import { useState } from 'react';
import "./App.css"
import { useHistory } from "react-router";

export const Start = ({file, name, artwork, setFile, setArtwork, setYear, setName}) => {

    const history = useHistory();

    const handleChange = (event) => {
      setFile(URL.createObjectURL(event.target.files[0]))
    }

    const handleArtworkChange = (event) => {
        setArtwork(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    
    /**
     * TODO:
     * Add where the painting came from (randomized)
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
          <h1 onClick={() => history.push("/")}>Put it in the Louvre</h1>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Input type="file" onChange={handleChange}/>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" paddingTop={2}>
          <img src={file} alt="" width="100%"/>
        </Box>

        <Box paddingTop={2} paddingBottom={2}>
         <Input type="text" onChange={handleArtworkChange} placeholder="Name of the artwork" fullWidth/>
        </Box>
        
        <Box paddingTop={2} paddingBottom={2}>
          <Input type="text" onChange={handleYearChange} placeholder="Year the artist was born (optional)" fullWidth/>
        </Box>

        <Box paddingTop={2} paddingBottom={2}>
          <Input type="text" onChange={handleNameChange} placeholder="Name of the artist" fullWidth />
        </Box>

        <Box paddingTop={2} paddingBottom={2} display="flex" justifyContent="center" alignItems="center">
          { (artwork !== "" && name !== "" && file !== null) && <Button onClick={() => history.push("/art")} variant="outlined">Put it in the Louvre!</Button> }
          { (artwork === "" || name === "" || file === null) && <Button disabled variant="outlined">Put it in the Louvre!</Button> }
        </Box>
        
      </Container>
    );
}