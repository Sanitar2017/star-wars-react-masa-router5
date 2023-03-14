import React, {useEffect, useState} from 'react';
import {base_url, periodMonth} from "../../utils/constants";

const Contact = () => {
    //comment
    const [planetsArray, setPlanets] = useState(['wait...']);
    const fillPlanets = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => data.map(obj => obj.name))
            .then(planetsArray => {
                setPlanets(planetsArray)
                let info = {
                    listPlanets: planetsArray,
                    time: Date.now()
                }
                localStorage.setItem('planets', JSON.stringify(info))
            })
    }

    useEffect(() => {
        let planets = JSON.parse(localStorage.getItem('planets'))
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            fillPlanets(`${base_url}/v1/planets`);
        } else {
            setPlanets(planets.listPlanets)
        }
    }, []);

    return (
        <div className="style.container">
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planetsArray.map((item, index) =>
                        <option value={item} key={index}>{item}</option>)}
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );

}

export default Contact;