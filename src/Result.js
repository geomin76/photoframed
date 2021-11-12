import { Container, Box, Button, Paper, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { PaintingType } from './Helper';
import './App.css'

export const Result = ({ file, artwork, year, name }) => {

    const history = useHistory();

    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="center" alignItems="center">
                <h1 onClick={() => history.push("/")}>Put it in the Louvre</h1>
            </Box>
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
            <div className="frame">
                <img src={file} alt=""/>
            </div>
        </Container>
    )
}