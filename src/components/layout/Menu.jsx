import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {makeStyles} from '@mui/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}))

export default function Menu() {

    const classes = useStyles()

    return (
        <div>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Shikimori</Typography>
                        <Box mr={3}>
                            <Button component={Link} to="/signin" color="inherit" variant="outlined">Log In</Button>
                        </Box>
                        <Button component={Link} to="/signup" color="secondary" variant="contained">Sig Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}