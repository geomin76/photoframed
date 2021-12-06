import { Container, Box, Button, Paper, Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { PaintingType } from './Helper';
import './App.css'

export const Result = ({ file, artwork, year, name, setFile }) => {

    const history = useHistory();

    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" alignItems="center">
                <h1 onClick={() => {
                    history.push("/")
                    setFile(null);
                }}>Put it in the Louvre</h1>
            </Box>
            <Grid container>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div className="frame">
                        <img src={file} alt=""/>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
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
        </Container>
    )
}