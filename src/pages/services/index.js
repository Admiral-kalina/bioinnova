import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Container from "../../components/Container/Container";

const Index = () => {
    return (
        <div>
            <Header/>

                <Services/>

            <Footer/>
        </div>
    );
};

export default Index;