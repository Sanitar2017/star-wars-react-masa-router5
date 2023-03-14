import React, {useEffect, useState} from 'react';
import style from './farGalaxy.module.css'

const FarGalaxy = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [opening_crawl, setOpening_crawl] = useState('');

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setIsLoading(false);
            setOpening_crawl(opening_crawl);
        } else {
            let episode = Math.floor(Math.random() * 6) + 1;
            fetch(`https://sw-info-api.herokuapp.com/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false);
                    setOpening_crawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, []);

    return (
        <p className={style.farGalaxy}>{isLoading ? 'Loading...' : opening_crawl}</p>
    )

}

export default FarGalaxy;