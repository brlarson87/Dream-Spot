import React from 'react';

import youtube from "../../img/youtube.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook2.svg";
import twitter from "../../img/twitter.svg";

const Footer = () => {
    return (
        <div className="footer">
            <h4>Follow us</h4>
            <div className="footer__links-container">
                <span>
                    <img src={youtube} alt="" />
                </span>
                <span>
                    <img src={twitter} alt="" />
                </span>
                <span>
                    <img src={instagram} alt="" />
                </span>
                <span>
                    <img src={facebook} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Footer;
