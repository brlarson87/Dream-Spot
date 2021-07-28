import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ path, component }) => {

    const user = useSelector(state => state.authReducer.user);
    const loading = useSelector(state => state.authReducer.loading);

    if((!user && !loading) || (user && !user.admin && !loading)) {
        return <Redirect to='login' />
    }

    return <Route exact path={path} component={component} />

};

export default AdminRoute;