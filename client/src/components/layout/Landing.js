import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import Header from './Header';
// import Footer from './Footer';


// import mainImage from '../../img/main-med.jpg';
// import secondaryImage from '../../img/secondary-med.jpg';
// import youtube from '../../img/youtube.svg';
// import twitter from '../../img/twitter.svg';
// import instagram from '../../img/instagram.svg';
// import facebook from '../../img/facebook2.svg';

const Landing = () => {

    const { isAuthenticated, user, loading } = useSelector(state => state.authReducer);

    if(loading && isAuthenticated) {
        return <div>Spinner</div>
    }

    return (
        <Fragment>
            {isAuthenticated && user ? <Header user={user} /> : <Header user={null}/> }
            
            <div className="landing-container">

                <div className="parallax">
                    <div className="parallax__layer parallax__layer--back">
                        
                    </div>
                    <div className="parallax__layer parallax__layer--base">
               
                        
                    </div>


                    
                </div>
               
            </div>
        </Fragment>
    )
}

export default Landing;