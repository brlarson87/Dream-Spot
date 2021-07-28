import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from "../layout/Header";

import backArrow from "../../img/arrow_back.svg";

const About = () => {
    return (
        <Fragment>
            <Header activePage={1} />
            <Link to="/" className="main-btn link-transform">
                <img src={backArrow} alt="" />
                &nbsp;Home
            </Link>
        </Fragment>
    )
}


export default About;