import React from 'react';
import {connect} from 'react-redux';
import Warrior from 'Components/warrior';
import {IMAGE_PATH} from 'Constants/appConstants';
import 'dmc/components/inlineList/inlineList.css';
import PropTypes from 'prop-types';

export const WarriorsList = (props) => {

    const getWarriorsListItems = () => {
        let items = [];
        props.warriors.forEach((warrior, index) => {
            items.push(
                <li className="dm-inline-list__item" key={index}>
                    <Warrior image={warrior.image} size="small"/>
                </li>
            );
        });
        return items;
    };

    return (
        <section className="dm-warriors dm-sidebar__section">
            <h3 className="dm-title dm-title--medium">Warriors</h3>
            <ul className="dm-warriors__list dm-inline-list">
                {getWarriorsListItems()}
            </ul>
        </section>
    );

};

/* istanbul ignore next */
const mapStateToProps = (store) => {
    return {warriors: store.warriors.allWarriors};
};

WarriorsList.displayName = 'WarriorList';

WarriorsList.propTypes = {
    warriors: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(WarriorsList);