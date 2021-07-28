import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ComboLinks from './ComboLinks';
import ticket from '../../img/ticket.svg';
import { LOGOUT_USER } from '../../actions/auth';


const Header = (props) => {
    
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(state => state.authReducer);

    return (
        <div className="header">
            <div className="logged-in-links">

                <ComboLinks active={props.activePage}/>
                
                {isAuthenticated ? (
                    <Fragment>
                        <Link to='/buy-tickets' className="header-link m-r-med">
                            Buy Tickets
                        </Link>
                        {/* <div className="ticket-info">
                            <span className="m-r-sm">{user.useableTickets.length} x</span>
                            <img className="m-r-med" src={ticket} alt="" />
                        </div> */}
                        
                        <div className="drop">
                            <h4 className="name">{user.firstName} &#8681;</h4>
                            <div className="drop-down">
                                <div className="drop-down__flex">
                                    <span>Tickets</span>
                                    <span>&times; {user.useableTickets.length}</span>
                                </div>
                                
                                <Link to="myAccount" className="drop-down-link">
                                    Account Details
                                </Link>
                        
                                <button className="logout-btn" onClick={() => dispatch({ type: LOGOUT_USER })}>Logout</button>
                                
                            </div>
                        </div>
                        
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <Link to='/login' className="link-primary">
                            Login
                        </Link>

                        <Link to='/register' className="link-primary">
                            Register
                        </Link>
                    </Fragment>
                )}
            </div>
            
        </div>
    )
    
    
}

export default Header;