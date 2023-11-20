import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: [
        { id:0, firstname: "Test", lastname: "Test", token: null }
    ],
    reducers: {
        loginUser: (state, action) => {
            const payloadSplit = String(action.payload).split('/')
            const firstname = payloadSplit[0]
            const lastname = payloadSplit[1]
            const token = payloadSplit[2]

            const user = state.find(t => t.id === 0)
            user.id = 1
            user.firstname = firstname
            user.lastname = lastname
            user.token = token
        },
        editUser: (state, action) => {
            const payloadSplit = String(action.payload).split('/')
            const firstname = payloadSplit[0]
            const lastname = payloadSplit[1]

            const user = state.find(t => t.id === 1)
            if(firstname !== '') {
                user.firstname = firstname
            }
            if(lastname !== '') {
                user.lastname = lastname
            }
        },
        logoutUser: (state) => {
            const user = state.find(t => t.id === 1)
            user.id = 0
            user.firstname = null
            user.lastname = null
            user.token = null
        }
    }
})

//Action creator
export const { loginUser, editUser, logoutUser } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

//Action Creator