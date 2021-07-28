import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';

import * as AdminActions from '../../actions/admin';

const Admin = () => {

    //const dispatch = useDispatch();

    const [ prizeData, setPrizeData ] = useState({
        address: "",
        prizeTotal: "",
        picturesLg: "",
        picturesSm: "",
        secondaryPrizesPlaces: "",
        secondaryPrizesPrize: "",
        secondaryPrizesImage: "",
        ticketPrizesPlaces: "",
        ticketPrizesAmount: "",
        charityAmount: "",
        charityPledgeAmount: "",
        detailsDescription: "",
        detailsNotables: ""

    });

    const { address, 
            prizeTotal, 
            picturesLg, 
            picturesSm, 
            secondaryPrizesPlaces, 
            secondaryPrizesPrize, 
            secondaryPrizesImage, 
            ticketPrizesPlaces, 
            ticketPrizesAmount, 
            charityAmount, 
            charityPledgeAmount, 
            detailsDescription, 
            detailsNotables
        } = prizeData;

    const onSubmit = e => {
        e.preventDefault();
        let newData = {
            address,
            prizeTotal: parseInt(prizeTotal),
            pictures: {
                desktop: picturesLg.split(','),
                mobile: picturesSm.split(',')
            },
            secondaryPrizes: {
                places: parseInt(secondaryPrizesPlaces),
                prize: secondaryPrizesPrize,
                img: secondaryPrizesImage 
            },
            ticketsPrizes: {
                places: parseInt(ticketPrizesPlaces),
                amount: parseInt(ticketPrizesAmount)
            },
            charityAmount: parseInt(charityAmount),
            charityPledgeAmount: parseInt(charityPledgeAmount),
            details: {
                description: detailsDescription,
                notables: detailsNotables.split(',')
            }
        };

        //console.log(newData);
        //dispatch(AdminActions.addNewHouse(newData));
        AdminActions.addNewHouse(newData);
    }

    const onChange = e => {
        setPrizeData({ ...prizeData, [e.target.name]: e.target.value });
    }

    return (
        <div className="admin">
            {/* ADD PRIZE     */}
            <div className="add-prize">

                <h3 className="add-prize__heading">Add Prize</h3>

                <form className="add-prize__form" onSubmit={e => onSubmit(e)}>

                    <div className="input-group">
                        <h5 className="input-group__heading">Address</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="address"
                            value={address}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Prize Total</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="prizeTotal"
                            value={prizeTotal}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Desktop Images</h5>
                        <textarea 
                            type="text" 
                            className="input-group__input input-group__input--ta"
                            name="picturesLg"
                            value={picturesLg}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Mobile Images</h5>
                        <textarea 
                            type="text" 
                            className="input-group__input input-group__input--ta"
                            name="picturesSm"
                            value={picturesSm}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Secondary Prize Places</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="secondaryPrizesPlaces"
                            value={secondaryPrizesPlaces}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Secondary Prize Prize</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="secondaryPrizesPrize"
                            value={secondaryPrizesPrize}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Secondary Prize Image</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="secondaryPrizesImage"
                            value={secondaryPrizesImage}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Ticket Prize Places</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="ticketPrizesPlaces"
                            value={ticketPrizesPlaces}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Ticket Prize Amount</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="ticketPrizesAmount"
                            value={ticketPrizesAmount}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Charity Amount</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="charityAmount"
                            value={charityAmount}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Charity Pledge Amount</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="charityPledgeAmount"
                            value={charityPledgeAmount}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Details Description</h5>
                        <input 
                            type="text" 
                            className="input-group__input"
                            name="detailsDescription"
                            value={detailsDescription}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <div className="input-group">
                        <h5 className="input-group__heading">Details Notables</h5>
                        <textarea 
                            type="text" 
                            className="input-group__input input-group__input--ta"
                            name="detailsNotables"
                            value={detailsNotables}
                            onChange={e => onChange(e)} 
                        />
                    </div>

                    <input type="submit" className="submit-btn" value="submit" />
                </form>
            </div>
            
        </div>
    )
}

export default Admin;
