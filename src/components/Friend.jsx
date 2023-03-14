import React from 'react';
import {friends, homePage} from "../utils/constants";
import {useNavigate} from "react-router-dom";

const Friend = (props) => {

    const navigate = useNavigate()
    return (
            <img className={`${props.mystyle} col-4 p-1`} src={friends[props.friend].img}
                 alt={friends[props.friend].name} onClick={() => navigate(`/${homePage}/${props.friend}`)}/>

    );
};

export default Friend;