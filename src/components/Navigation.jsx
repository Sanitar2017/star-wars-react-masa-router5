import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (

        <nav>
            <ul className="list-unstyled d-inline-flex position-fixed">
                <Link to={`${homePage}/${props.hero}`}>
                    <li className="btn btn-danger border border-light rounded-pill">Home
                    </li>
                </Link>
                <Link to={`${aboutMePage}/${props.hero}`}>
                    <li className="btn btn-danger border border-light rounded-pill">About me
                    </li>
                </Link>
                <Link to={starWarsPage}>
                    <li className="btn btn-danger border border-light rounded-pill">Star wars
                    </li>
                </Link>
                <Link to={contactPage}>
                    <li className="btn btn-danger border border-light rounded-pill">Contact
                    </li>
                </Link>
            </ul>
        </nav>
    )
        ;
};

export default Navigation;