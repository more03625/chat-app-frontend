import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from './comman_helper';
const Protected = (props) => {
    const history = useHistory();

    let Component = props.component;

    useEffect(() => {
        if (getUserInfo() !== null) {
            history.push("/");
        } else {
            history.push("/login");
        }
    }, []);
    return (
        <>
            <Component />
        </>
    );
}

export default Protected;