import React from 'react';
import Style from './Products.module.scss';
import Button from '../Button/Button'

const SmartFan = (props) => {
    return (
        <div className={Style.Container}>
            <div className={Style.Icon}></div>
            <div className={Style.TempDisp}><h1>18°C</h1></div>
            <Button></Button>
        </div>
    );
};

export default SmartFan;