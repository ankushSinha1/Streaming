import streams from '../api/streams'
import {useNavigate} from 'react-router-dom';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    SHOW_STREAM, 
    UPDATE_STREAM, 
    DELETE_STREAM, 
    FETCH_STREAMS 
} from './types'
    
export let signIn = (user_id) =>{
    return{
        type: SIGN_IN,
        payload: user_id
    }
}
export let signOut = () =>{
    return{
        type: SIGN_OUT
    }
}
export let createStream = (formValues) => async (dispatch,getState) => {
    const navigate = useNavigate()
    let {userId} = getState().authReducer;
    let res = await streams.post('/streams', {...formValues, userId})
    dispatch({type: CREATE_STREAM, payload: res.data})
    navigate('/')
//ideal place to do the programmatic navigation
}
export let fetchStreams = () => async dispatch => {
    let res = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: res.data})
}
export let showStream = (id) => async dispatch => {
    let res = await streams.get(`/streams/${id}`);
    dispatch({type: SHOW_STREAM, payload: res.data})
}
export let updateStream = (formValues, id) => async dispatch => {
    let res = await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: UPDATE_STREAM, payload: res.data})
}
export let deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
    window.location.href = "http://localhost:3000/"
}