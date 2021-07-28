import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadHouses } from '../../../actions/houses';
import Header from '../../layout/Header';
import HouseCard from './HouseCard';

const Houses = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const loadHousesAction = await loadHouses();
            dispatch(loadHousesAction);
          })()
    }, [dispatch]);

    const loading = useSelector(state => state.housesReducer.loading);
    const houses = useSelector(state => state.housesReducer.houses);

    if(loading) {
        return (
            <div>Spinner</div>
        )
    }

  
    return (
        <Fragment>
            <Header activePage={2}/>
            <div className="house-grid">
                {houses.map(house => (
                    <HouseCard house={house} key={house._id}/>
                ))}
            </div>
        </Fragment>
    )
}

export default Houses;