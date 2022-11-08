import * as api from '../api';
//Action creators
export const getPosts = () => async(dispatch)=>{
    const action = { type :'FETCH_ALL',payload:[]}
    
    
    try {
        const {data} =  await api.fetchPosts();// response from api to get the data from the backend

        dispatch({ type: 'FETCH_ALL',payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
}
