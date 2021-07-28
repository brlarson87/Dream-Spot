import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../layout/Header';
import Carousel from './Carousel';

import camera from '../../../img/camera.svg';


import { loadHouses } from '../../../actions/houses';

const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SingleHouse = (props) => {

    const [carousel, setCarousel] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const loadHousesAction = await loadHouses();
            dispatch(loadHousesAction);
          })()
    }, [dispatch]);

    const loading = useSelector(state => state.housesReducer.loading);
    const singleHouse = useSelector(state => state.housesReducer.houses).find(house => house._id === props.match.params.id);

    if(loading) {
        return (
            <div>Spinner</div>
        )
    }

    if(!singleHouse) {
        props.history.push('/')
    }

    const openCarousel = () => {
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        setCarousel(true);
    }

    const closeCarousel = () => {
        document.getElementsByTagName('body')[0].style.overflow = "auto";
        setCarousel(false);
    }

    return (
        <Fragment>
            {/* <Header activePage={null}/> */}
            <div className="single-house">
                <Link to="/houses" className="link-back">
                    Houses
                </Link>

                <div className="single-house__main">
                    <div>
                        <h2 className="single-house__address">{singleHouse.address}</h2>
                        <h4 className="single-house__description">{singleHouse.details.description}</h4>
                    </div>
                    
                    <div className="single-house__thumbnail" onClick={() => openCarousel()}>
                        <div className="camera-box">
                            <div className="camera-box__camera">
                                <h6>{singleHouse.pictures.desktop.length}</h6>
                                <img src={camera} alt="" />
                            </div>
                        </div>

                        <div>
                            <img src={singleHouse.pictures.desktop[0]} alt="" />
                        </div>
                        
                    </div>

                    <div className="ticket-total">
                        <h3>Total tickets entered</h3>
                        <span>{format(singleHouse.ticketPool)}</span>
                        <span> | </span>
                        <span>{format(singleHouse.prizeTotal)}</span>
                    </div>
                </div>

                <div className="single-house__details">
                    
                        <div className="single-house__card">
                            <h4>Enter Tickets</h4>
                            <input 
                                type="text"
                                maxLength="3" 
                                className="single-house__card__input" />
                            <button className="single-house__card__btn">Enter</button>

                            <p className="footnote">*200 ticket maximum entry at a time</p>
                        </div>

                        <div className="single-house__card">
                            <h4>Secondary Prize</h4>
                            <div className="flex-container">
                                <h5>Winners</h5>
                                <span>#/{format(singleHouse.secondaryPrizes.places)}</span>
                            </div>

                            <div className="flex-container">
                                <h5>Prize</h5>
                                <span>{singleHouse.secondaryPrizes.prize}</span>
                            </div>
                            
                            <div className="single-house__prize-image">
                                <img src={singleHouse.secondaryPrizes.img} alt="" />
                            </div>
                        </div>

                        <div className="single-house__card">
                            <h4>Tickets Prize</h4>

                            <div className="flex-container">
                                <h5>Winners</h5>
                                <span>#/{format(singleHouse.ticketsPrizes.places)}</span>
                            </div>

                            <div className="flex-container">
                                <h5>Prize</h5>
                                <span>{format(singleHouse.ticketsPrizes.amount)} tickets</span>
                            </div>

                            <p className="footnote">*Ticket prizes are not cash redeemable. You can receive a full refund on all deposits</p>
                           
                        </div>

                        <div className="single-house__card">
                            <h4>Charity</h4>

                            <div className="flex-container">
                                <h5>Donation Amount</h5>
                                <span>${format(singleHouse.charityAmount)}</span>
                            </div>

                            <div className="flex-container">
                                <h5>Charities Entered</h5>
                                <span>{format(singleHouse.charityPool.length)}</span>
                            </div>

                            <div className="flex-container">
                                <h5>Pledge Amount*</h5>
                                <span>{format(singleHouse.charityPledgeAmount)}</span>
                            </div>

                            <p className="footnote">*The pledge amount is the amount of tickets required in this prize pool before you can pledge a charity to be entered into the charity pool</p>
                            <Link to="/about" className="link-info m-b-sm">
                                More Info &#8680;
                            </Link>
                            
                        </div>
                    
                </div>

                <div className="single-house__notes">

                </div>
            </div>

            {carousel &&
                <Carousel pictures={singleHouse.pictures} closeCarousel={closeCarousel}/> 
                // <div className="carousel">
                //     Carousel

                //     <div onClick={() => setCarousel(false)}>X</div>
                // </div>
            }       
        </Fragment>
    )
}

export default SingleHouse;