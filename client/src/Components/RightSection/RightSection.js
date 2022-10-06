import React from 'react';
import Style from './RightSection.module.scss';
import BiggestFan from "../Subcomponents/Products/BiggestFan";
import TrackMate from '../Subcomponents/Products/TrackMate';
import Brightlite from '../Subcomponents/Products/Brightlite';
import Caffeinated from '../Subcomponents/Products/Caffeinated';
import HandyStandy from '../Subcomponents/Products/HandyStandy';

const RightSection = () => {
    return (
        <div className={Style.Section}>
            <Brightlite/>
            <BiggestFan/>
            <Caffeinated/>
            <HandyStandy/>
            <TrackMate/>
        </div>
    );
};

export default RightSection;