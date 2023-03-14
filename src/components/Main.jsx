import React from 'react';
import Home from "./Home";
import AboutMe from "./farGalaxy/AboutMe";
import StarWars from "./farGalaxy/StarWars";
import Contact from "./contact/Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";

import ErrorPage from "./ErrorPage";
import {Route, Routes} from "react-router-dom";

const Main = (props) => {
    return (
        <Routes>//localhost:3000, localhost:3000/home, localhost:3000/luke, localhost:3000/home/luke
            {['/', homePage, '/:heroId', `${homePage}/:heroId`].map(path =>
            <Route path={path} key={path} element={<Home changeHero={props.changeHero}/>}/>)}

            {/*localhost:3000/about_me, localhost:3000/about_me/luke*/}
            {[aboutMePage, `${aboutMePage}/:heroId`].map(path =>
            <Route path={path} key={path} element={<AboutMe changeHero={props.changeHero}/>}/>)}

            <Route path={starWarsPage} element={<StarWars/>}/>
            <Route path={contactPage} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;