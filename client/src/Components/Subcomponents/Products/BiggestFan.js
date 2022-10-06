import React from 'react';
import Style from './Products.module.scss';
import Button from '../Button/Button'

const SmartFan = (props) => {
    return (
        <div className={Style.Container}>
            <div className={Style.Icon}></div>
            <div className={Style.TempDisp}>18°C</div>
            <p className={Style.Paragraph}>Fan: Off</p>
            <Button className='ButtonMove'>More</Button>
        </div>
    );
};

export default SmartFan;