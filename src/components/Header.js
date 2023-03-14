import React from 'react';
import Navigation from "./Navigation";
import {friends} from "../utils/constants";

const Header = (props) => {
    return (
        <header className="rounded-top">
            <Navigation hero={props.hero}/>
            <h1 className="text-center pt-5">{friends[props.hero].name}</h1>
        </header>
    );
};

export default Header;