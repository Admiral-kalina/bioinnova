import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import axios from "axios";
import {userData} from "../../helpers/userData";
import {findObjectsByLanguage} from "../../helpers/findObjectByLanguage";

const {userId} = userData()

const initialState = {
    courses: [],
    isLoading: true,
    error: null,
}

const fetchUserAvailableCoursesIds = createAsyncThunk(
    'courses/fetchCoursesByIds',
    async () => {
        console.log(101)


    }
)




export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchCourses.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(fetchCourses.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.courses = action.payload.data
        // })
        // builder.addCase(fetchCourses.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error.message
        // })
    },
})

export default coursesSlice.reducer


