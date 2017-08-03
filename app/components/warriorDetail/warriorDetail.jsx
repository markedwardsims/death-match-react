import React from 'react';
import PropTypes from 'prop-types'
import Warrior from 'warrior';
import {IMAGE_PATH} from 'constants/appConstants';

import 'dmc/css/components/warriorDetail.min.css';

export default class WarriorDetail extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let cssClass = "warrior-detail";
        if (this.props.warriorDetailCssClass) cssClass = cssClass + ' ' + this.props.warriorDetailCssClass;

        let warrior = (this.props.warrior) ?
            <figure className={cssClass} onClick={this.props.onClickHandler}>
                <Warrior image={this.props.warrior.image}/>
                <figcaption className="warrior-detail__caption">
                    <div className="warrior-detail__name">{this.props.warrior.name}</div>
                    <div className="warrior-detail__wins">{this.props.warrior.wins}</div>
                </figcaption>
            </figure> : null;

        return warrior;
    }

}

WarriorDetail.displayName = 'WarriorDetail';

WarriorDetail.propTypes = {
    warrior: PropTypes.object,
    onClickHandler: PropTypes.func,
    warriorDetailCssClass: PropTypes.string
};

