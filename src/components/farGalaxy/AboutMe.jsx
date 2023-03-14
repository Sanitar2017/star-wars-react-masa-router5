import React, {useEffect, useState} from 'react';
import {charaters, defaultHero, friends, periodMonth} from "../../utils/constants";
import style from './farGalaxy.module.css'
import {useParams} from "react-router-dom";


const AboutMe = props => {
    const [hero, setHero] = useState();
    // let params = useParams() //{heroId: 'luke'}  params.heroId
    let {heroId} = useParams() // 'luke'   heroId

    useEffect(() => {

        if (!charaters.includes(heroId))
            heroId = defaultHero;
        let hero = JSON.parse(localStorage.getItem(heroId));
        if (!hero || (Date.now() - hero.time) > periodMonth) {
            fetch(friends[heroId].url)
                .then(response => response.json())
                .then(data => {
                    let info =
                        {
                            "name": data.name,
                            "gender": data.gender,
                            "skin_color": data.skin_color,
                            "hair_color": data.hair_color,
                            "height": data.height,
                            "eye_color": data.eye_color,
                            "mass": data.mass,
                            "birth_year": data.birth_year
                        }

                    setHero(info);
                    hero = {
                        info: info,
                        time: Date.now()
                    }
                    localStorage.setItem(heroId, JSON.stringify(hero))
                })
        } else {
            setHero(hero.info);
        }
        props.changeHero(heroId);
    }, [])
    return (
        <div>
            {hero &&
            <div className={style.farGalaxy}>
                <p><span className={style.hero_title}>Name:  </span>{hero.name}</p>
                <p><span className={style.hero_title}>Height:  </span>{hero.height}</p>
                <p><span className={style.hero_title}>Birth year:  </span>{hero.birth_year}</p>
                <p><span className={style.hero_title}>Gender:  </span>{hero.gender}</p>
                <p><span className={style.hero_title}>Mass:  </span>{hero.mass}</p>
                <p><span className={style.hero_title}>Hair color:  </span>{hero.hair_color}</p>
                <p><span className={style.hero_title}>Skin color:  </span>{hero.skin_color}</p>
                <p><span className={style.hero_title}>Eye color:  </span>{hero.eye_color}</p>
            </div>}
        </div>
    );
};

export default AboutMe;