import React from 'react';
import PropTypes from 'prop-types';
import Warrior from 'Components/warrior';
import {IMAGE_PATH} from 'Constants/appConstants';
import 'dmc/components/warriorDetail/warriorDetail.css';

export const WarriorDetail = (props) => {

    let cssClass = "dm-warrior-detail";
    if (props.warriorDetailCssClass) cssClass = cssClass + ' ' + props.warriorDetailCssClass;

    return (props.warrior) ?
        <figure className={cssClass} onClick={props.onClickHandler}>
            <Warrior image={props.warrior.image}/>
            <figcaption className="dm-warrior-detail__caption">
                <div className="dm-warrior-detail__name">{props.warrior.name}</div>
                <div className="dm-warrior-detail__wins">{props.warrior.wins}</div>
            </figcaption>
        </figure> : null;

};

WarriorDetail.displayName = 'WarriorDetail';

WarriorDetail.propTypes = {
    warrior: PropTypes.object,
    onClickHandler: PropTypes.func,
    warriorDetailCssClass: PropTypes.string
};

export default WarriorDetail;