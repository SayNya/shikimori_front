import axios from 'axios';
import {GET_ANIME} from './types';

const URL = 'http://127.0.0.1:8000/api/v1/';

//GET_ANIME
export const getAnime = () => dispatch => {
    axios
        .get(URL + 'anime/')
        .then(res => {
            dispatch({
                type: GET_ANIME,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};