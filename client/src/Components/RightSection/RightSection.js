import React from 'react';
import Style from './RightSection.module.scss';
import SmartFan from "../Subcomponents/Products/SmartFan";
import SmartClock from '../Subcomponents/Products/SmartClock';

const RightSection = () => {
    return (
        <div className={Style.Section}>
            <SmartFan/>
            <SmartFan/>
            <SmartFan/>
            <SmartFan/>
            <SmartClock/>
        </div>
    );
};

export default RightSection;