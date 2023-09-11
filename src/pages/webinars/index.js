import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Webinars from "../../components/Webinars/Webinars";

const Index = ({pageContext}) => {
    return (
        <div>
            <Header/>
            <Webinars context={pageContext}/>
            <Footer/>
        </div>
    );
};

export default Index;