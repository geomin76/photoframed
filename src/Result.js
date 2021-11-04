import { Container, Box, Button } from '@mui/material';
import { useHistory } from 'react-router';

export const Result = ({ file, artwork, year, name }) => {

    const history = useHistory();

    return (
        <Container maxWidth="md">
            <Box display="flex" justifyContent="center" alignItems="center">
                <h1 onClick={() => history.push("/")}>Put it in the Louvre</h1>
            </Box>
            <Box paddingTop={1} paddingBottom={1}>
                <p>{artwork}</p>
            </Box>
            <Box paddingTop={1} paddingBottom={1}>
                <p>{year}</p>
            </Box>
            <Box paddingTop={1} paddingBottom={1}>
                <p>{name}</p>
            </Box>
            <Box p={2}>
                <img src={file} alt="" width="100%"/>
            </Box>
        </Container>
    )
}