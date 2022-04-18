import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {userService} from "../../services/user.service";
import {UserDetails} from "../../components";
import {Loading} from "../../components";


export const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getById(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [userId, state]);
    return (
        <div>
            <div>
                {user ? <UserDetails user={user}/> : <Loading/>}
            </div>
            <Outlet/>
        </div>
    );
};

