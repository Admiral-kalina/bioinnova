import React from 'react';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Programs from "../../components/Programs/Programs";


const Index = ({pageContext}) => {
    return (
        <>
            <Header/>
            <Programs context={pageContext}/>
            <Footer/>
        </>
    );
};

export default Index;


