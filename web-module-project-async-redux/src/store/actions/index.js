import axios from 'axios';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_CHARACTERS_START})
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log(res)
            dispatch({type:FETCH_CHARACTERS, payload:res.data.results})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_FAIL, payload: err.message})
        })
    }
}