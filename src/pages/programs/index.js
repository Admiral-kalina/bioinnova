import React from 'react';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Programs from "../../components/Programs/Programs";
import {useDispatch} from "react-redux";


const Index = ({pageContext}) => {
    console.log('CONTEXT',pageContext)
    const dispatch = useDispatch()
    return (
        <>
            <Header/>
            <Programs context={pageContext}/>
            <Footer/>
        </>
    );
};

export default Index;


