import axios from 'axios';
import {GET_ANIME_BY_SLUG, GET_ANIME_LIST} from './types';

const URL = 'http://127.0.0.1:8000/api/v1/';

//GET_ANIME_LIST
export const getAnimeList = () => dispatch => {
    axios
        .get(URL + 'anime/')
        .then(res => {
            dispatch({
                type: GET_ANIME_LIST,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

//GET_ANIME_LIST
export const getAnimeBySlug = (slug) => dispatch => {
    axios
        .get(URL + 'anime/' + slug)
        .then(res => {
            dispatch({
                type: GET_ANIME_BY_SLUG,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};