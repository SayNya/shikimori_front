import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAnime} from "../../store/actions/anime";

export default function MainPage() {
    const anime = useSelector(state => state.anime.anime)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAnime())
    }, []);
    return (
        <main>
            <Container sx={{py: 8}} maxWidth="md">
                <Grid container spacing={4}>
                    {anime.map(anime => (
                        <Grid item key={anime.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {anime.name_rus}
                                    </Typography>
                                    <Typography>
                                        {anime.name_jap}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}