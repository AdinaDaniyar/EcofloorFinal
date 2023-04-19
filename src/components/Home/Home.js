import React from 'react';
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Certificate from "../Certificate/Certificate";
import Arrow from "../Arrow/Arrow";


const Home = () => {
    return (
        <div>
            <Header/>
            <Cover/>
            <About/>
            <Products/>
            <Clients/>
            <Gallery/>
            <Certificate/>
            <Contact/>
            <Footer/>
            <Arrow/>

        </div>
    );
};

export default Home;