import React from 'react';
import style from './footer.module.css'

const Footer = () => {
    return (
        <footer className="rounded-bottom">
            <div className="btn btn-danger border border-light rounded-pill">
                <p>Send me an <span className={style.email}>email</span></p>
            </div>
        </footer>
    );
};

export default Footer;