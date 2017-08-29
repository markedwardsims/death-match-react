import React from 'react';
import {connect} from 'react-redux';
import {orderBy} from 'lodash';
import 'dmc/components/table/table.css';
import PropTypes from 'prop-types';
import './leaderboard.scss';

export const Leaderboard = (props) => {

    const getLeaderboardRows = () => {
        let items = [];

        let sortedWarriors = orderBy(props.warriors, (w) => w.wins).reverse();

        sortedWarriors.forEach(function (warrior, index) {
            items.push(
                <tr className="dm-table__row" key={index}>
                    <td className="dm-table__cell">{warrior.name}</td>
                    <td className="dm-table__cell dm-text-right">{warrior.wins}</td>
                </tr>
            );
        });
        return items;
    };

    return (
        <section className="dm-leaderboard dm-sidebar__section dm-sidebar__section--full-width">
            <h3 className="dm-title dm-title--medium">Leaderboard</h3>
            <table className="dm-table dm-table--dark leaderboard__table">
                <thead className="dm-table__thead">
                <tr className="dm-table__row">
                    <th className="dm-table__cell">Warrior</th>
                    <th className="dm-table__cell dm-text-right">Wins</th>
                </tr>
                </thead>
                <tbody>
                { getLeaderboardRows() }
                </tbody>
            </table>
        </section>
    );

};

/* istanbul ignore next */
const mapStateToProps = (store) => {
    return {warriors: store.warriors.allWarriors};
};

Leaderboard.displayName = 'Leaderboard';

Leaderboard.propTypes = {
    warriors: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Leaderboard);