import React from 'react';

// components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts/Contacts";
import Activities from "../../components/Activities/Activities";
import AboutCompany from "../../components/AboutCompany/AboutCompany";

const Index = () => {
    return (
        <div>
            <Header type='full'/>
            <div  className={` page about-page`}>
                <AboutCompany/>
            </div>
            <Footer/>
        </div>
    );
};

export default Index;