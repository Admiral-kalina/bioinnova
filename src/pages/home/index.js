import React from 'react';

import {Protector} from "../../helpers/userData";

import Home from "../../components/Home/Home";

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Index = ({pageContext}) => {

    return (
        <Protector>
            <Header/>
          <div style={{background: "#151515"}}>
              <Container>
                  <Home context={pageContext.nav}/>
              </Container>
          </div>
           <Footer location='home'/>
        </Protector>
    );
};

export default Index;