import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {IMAGE_PATH} from 'Constants/appConstants';
import 'dmc/components/warrior/warrior.css';

export const Warrior = (props) => {

    let imageClasses = classNames('dm-warrior', {['dm-warrior--' + props.size]: props.size});

    return (
        <img className={imageClasses} src={IMAGE_PATH + props.image}/>
    );

};

Warrior.displayName = 'Warrior';

Warrior.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default Warrior;