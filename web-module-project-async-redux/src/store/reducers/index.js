import axios from 'axios';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_START, FETCH_FAIL  } from '../actions'
const initialState = {
    isLoading: false,
    characters: [],
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                isLoading:true,
            }
        case FETCH_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                isLoading:false
            }
        case FETCH_FAIL:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state;
    }
}