import React, {useEffect} from 'react';
import {fetchUserCourses} from "../features/userSlice/userSlice";
import {fetchCourses} from "../features/coursesSlice/coursesSlice";
import {useDispatch} from "react-redux";


const MiddleLayout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserCourses())
        dispatch(fetchCourses())
    }, [])

    return (
        <div>
            {children}
        </div>
    );
};

export default MiddleLayout;