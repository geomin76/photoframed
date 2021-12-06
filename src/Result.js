import { Container, Box, Paper, Grid, Button } from '@mui/material';
import { useHistory } from 'react-router';
import { PaintingType } from './Helper';
import './App.css'
import React from 'react';
import html2canvas from "html2canvas";

export const Result = ({ file, artwork, year, name, setFile }) => {

    const history = useHistory();

    const printRef = React.useRef();

    const handleDownloadImage = async () => {
        const element = printRef.current
        const canvas = await html2canvas(element, {
          windowWidth: '1280px',
          useCORS: true,
          scale: 4
        });
     
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
     
        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'image.jpg';
     
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
      };

    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" alignItems="center">
                <h1 onClick={() => {
                    history.push("/")
                    setFile(null);
                }}>photoframed</h1>
            </Box>
            <div ref={printRef}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className="frame">
                            <img src={file} alt=""/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 4,
                            width: 425,
                            height: 250,
                            },
                        }}>
                            <Paper elevation={3}>
                                <Box paddingLeft={3}>
                                    <p style={{ fontSize: "22px", marginBottom: 5 }}><b>{name}</b> {year !== "" && <>(b. {year})</>}</p>
                                </Box>
                                <Box paddingLeft={3}>
                                    <p style={{ fontSize: "22px", paddingTop: 3, margin: 0 }}><i><b>{artwork}</b></i>, 2021</p>
                                </Box>
                                <Box paddingLeft={3}>
                                    <p style={{ fontSize: "15px", paddingTop: 0 }}>{PaintingType()}</p>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Box p={1} display="flex" justifyContent="center" alignItems="center"><Button onClick={() => handleDownloadImage()} variant="outlined">Download your art!</Button></Box>
            <Box p={1} display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => {
                history.push("/");
                setFile(null);
            }} variant="outlined">Create more art!</Button>
            </Box>
            
        </Container>
    )
}