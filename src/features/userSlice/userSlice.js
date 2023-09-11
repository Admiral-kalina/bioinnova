import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {findObjectsByLanguage} from "../../helpers/findObjectByLanguage";
import {strapiApi} from "../../api";

const languageFromStorage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ru' : 'ru';
const coursesFromStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('coursesList')) || [] : [];

const initialState = {
    user: {
        language: languageFromStorage,
        coursesList: [...coursesFromStorage]
    },
    isLoading: false,
    error: null,
}

export const fetchUserCourses = createAsyncThunk(
    'courses/fetchCoursesByLanguage',

    async (language = 'ru') => {

        const userResponse = await strapiApi.get(`/api/users/2?populate=*`)
        const userCoursesIds = userResponse.data.courses.map(course => course.id)

        let userCourses;
        await axios.all(userCoursesIds.map((id) => strapiApi.get(`/api/courses/${id}?populate=*`))).then(
            (data) => userCourses = data,
        );

        return findObjectsByLanguage(userCourses, language);

    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserLanguage(state, action) {
            state.user.language = action.payload
            localStorage.setItem('language', action.payload)
        },
        addUserCurse(state, action) {
            state.user.coursesList = [...state.user.coursesList, action.payload]
            localStorage.setItem('coursesList', JSON.stringify([...state.user.coursesList]))
        },
        removeUserCurse(state) {
            state.user.coursesList = []
            localStorage.setItem('coursesList', JSON.stringify([]))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserCourses.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUserCourses.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.user = {
                language: languageFromStorage,
                coursesList: action.payload
            }

        })
        builder.addCase(fetchUserCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export const {changeUserLanguage, addUserCurse, removeUserCurse} = userSlice.actions
export default userSlice.reducer