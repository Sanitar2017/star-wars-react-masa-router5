import friend1 from '../images/friend1.jpg'
import friend2 from '../images/friend2.jpg'
import friend3 from '../images/friend3.jpg'
import friend4 from '../images/friend4.jpg'
import friend5 from '../images/friend5.jpg'
import friend6 from '../images/friend6.jpg'
import friend7 from '../images/friend7.jpg'
import friend8 from '../images/friend8.jpg'
import friend9 from '../images/friend9.jpg'
import friend0 from '../images/main.jpg'

export const version = '/v1';
export const base_url = 'https://sw-info-api.herokuapp.com/'
export const friends =
    {
        luke:
            {
                name: "Luke Skywalker",
                img: friend0,
                url: `${base_url + version}/peoples/1`
            },
        r2d2:
            {
                name: "R2-D2",
                img: friend1,
                url: `${base_url + version}/peoples/3`
            },
        c3po:
            {
                name: "C-3PO",
                img: friend2,
                url: `${base_url + version}/peoples/2`
            },
        ewok:
            {
                name: "Wicket Systri Warrick",
                img: friend3,
                url: `${base_url + version}/peoples/30`
            },
        chewbacca:
            {
                name: "Chewbacca",
                img: friend4,
                url: `${base_url + version}/peoples/13`
            },
        han_solo:
            {
                name: "Han Solo",
                img: friend5,
                url: `${base_url + version}/peoples/14`
            },
        leia:
            {
                name: "Leia Organa",
                img: friend6,
                url: `${base_url + version}/peoples/5`
            },
        falcon:
            {
                name: "Millenium Falcon",
                img: friend7,
                url: `${base_url + version}/transports/10`
            },
        obi_wan:
            {
                name: "Obi-Wan Kenobi",
                img: friend8,
                url: `${base_url + version}/peoples/10`
            },
        yoda:
            {
                name: "Yoda",
                img: friend9,
                url: `${base_url + version}/peoples/0`
            }
    }

export const charaters = Object.keys(friends);
export const defaultHero = charaters[0];
export const homePage = 'home';
export const contactPage = 'contact'
export const aboutMePage = 'about_me'
export const starWarsPage = 'star_wars'


export const periodMonth = 1000 * 60 * 60 * 24 * 30

export const starWarsInfo = 'Star Wars is an American epic space opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areascomprising an all-encompassing fictional universe.[c] Star Wars is one of the highest-grossing media franchises of all time.\n' +
    '\n' +
    'The original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).\n' +
    '\n' +
    'All nine "Skywalker Saga" films were nominated for Academy Awards wins and the first two releases each won an Oscar. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, which makes it the second-highest-grossing film franchise of all time.[3][4] Additional upcoming films are in the works, including an untitled movie from Taika Waititi and Rogue Squadron directed by Patty Jenkins, both currently without release dates.[5]'