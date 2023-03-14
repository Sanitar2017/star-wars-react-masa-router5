import React, {useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./farGalaxy/FarGalaxy";
import {charaters, defaultHero} from "../utils/constants";
import {useParams} from "react-router-dom";

const Home = props => {

    let {heroId} = useParams()
    if (!charaters.includes(heroId))
        heroId = defaultHero;

    useEffect(() => {
        props.changeHero(heroId);
    }, [heroId])

      return (
            <main className="clearfix">
                <Hero hero={heroId}/>
                <Friends hero={heroId} changeHero={props.changeHero}/>
                <FarGalaxy/>
            </main>
        );
}

export default Home;