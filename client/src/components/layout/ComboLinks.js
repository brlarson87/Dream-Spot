import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ComboLinks = (props) => {

    return (
        <Fragment>
            <Link to='/about' className={`header-link m-r-med ${props.active === 1 && "header-link--active"}`}>
                    About Us
            </Link>
            <Link to='/houses' className={`header-link m-r-med ${props.active === 2 && "header-link--active"}`}>
                Houses
            </Link>
            <Link to='/charities' className={`header-link m-r-med ${props.active === 3 && "header-link--active"}`}>
                Charities
            </Link>
        </Fragment>
    )
}

export default ComboLinks;
