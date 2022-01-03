import {GET_ANIME} from "../actions/types.js"

const initialState = {
    anime: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANIME:
            return {
                ...state,
                anime: action.payload
            };
        default:
            return state;
    }
}