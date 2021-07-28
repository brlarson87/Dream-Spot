import React from 'react';
import { withRouter } from 'react-router-dom';

const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const HouseCard = props => {
    const { pictures, 
            ticketPool, 
            address, 
            prizeTotal, 
            charityAmount, 
            charityPledgeAmount,
            _id } = props.house;

    const mainThumb = pictures.desktop[0];

    return (
        <div className="house" onClick={ () => props.history.push(`/houseInfo/${_id}`) }>
            <h5 className="house__address">{address}</h5>
            <div className="house__thumbnail">
                <img src={mainThumb} alt="" />
            </div>
            <div className="house__info">

                <div className="house__info__flex">
                    <span>Ticket Pool Size |</span>
                    <span>{format(prizeTotal)}</span>
                </div>

                <div className="house__info__flex">
                    <span>Tickets Entered |</span>
                    <span>{format(ticketPool)}</span>
                </div>

                <div className="house__info__flex">
                    <span>Charity Amount |</span>
                    <span>${format(charityAmount)}</span>
                </div>

                <div className="house__info__flex">
                    <span>Pledge Amount |</span>
                    <span>{charityPledgeAmount} tickets</span>
                </div>

            </div>
            
        </div>
    )
}

export default withRouter(HouseCard);
