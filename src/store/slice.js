import {createSlice} from '@reduxjs/toolkit';
import {apiCall} from "./apiCall";


const slice  = createSlice({
        name: 'slice',
        initialState: {
            registration: [],
        },
        reducers: {
            getFromResponse: (state, action) => {
                state.registration = action.payload
            },
            postSaved: (state, action) => {
                state.registration.unshift(action.payload)
            },
        }
    })

export const getPosts = () => apiCall({
    url: '/data',
    method: 'get',
    onSuccess: slice.actions.getFromResponse.type,
})
export const savePosts = (data) => apiCall({
    url: '/data',
    method: 'post',
    data,
    onSuccess: slice.actions.postSaved.type,
})

export default slice.reducer
