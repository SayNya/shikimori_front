import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAnimeBySlug} from "../../store/actions/anime";
import {Button} from "@mui/material";

export default function AnimeDetail()
{
    const {slug} = useParams()
    const anime = useSelector(state => state.anime.anime)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAnimeBySlug(slug))
    }, []);
    return (
        <Button>{anime.name_rus}</Button>
    )
}