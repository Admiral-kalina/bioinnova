import React from 'react';

// components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts/Contacts";
import Activities from "../../components/Activities/Activities";

const Index = () => {
    return (
        <div>
            <Header/>
            <Activities/>
            <Footer/>
        </div>
    );
};

export default Index;