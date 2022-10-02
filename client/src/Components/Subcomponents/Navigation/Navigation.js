import React from 'react';
import Style from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={Style.Container}>
            <div>
                <div className={Style.Image}></div>
                <h1>Hello user!</h1>
            </div>
            <h2 className={Style.Float}>Online Devices<div className={Style.Circle}>4</div></h2>
            <p>Monday, 10 February 2020</p>
        </div>
    );
};

export default Navigation;