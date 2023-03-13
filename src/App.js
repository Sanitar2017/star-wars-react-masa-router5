import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {defaultHero} from "./utils/constants";

const App = () => {
    const [hero, setHero] = useState(defaultHero);
    const changeHero = hero => {
        setHero(hero);
    }

    return (
        <div className='container-fluid'>
            <Header hero={hero}/>
            <Main changeHero={changeHero}/>
            <Footer/>
        </div>
    );

}

export default App;

//URI = URL + UDN
//npm i react-router-dom@5