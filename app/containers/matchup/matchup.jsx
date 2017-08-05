import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WarriorDetail from 'warriorDetail';
import {chooseOpponents, notify, notifyClear} from 'actions';

import './matchup.scss';

export const Matchup = (props) => {

    const eventSelection = (selectedWarrior) => {
        props.socket.emit('warriorSelection', selectedWarrior.id);
        props.chooseOpponents();
    };

    return (props.opponent1 && props.opponent2) ?
        <div className="matchup">
            <h2 className="title title--large title--yellow matchup__title matchup__title--first">Matchup!</h2>
            <h3 className="title title--medium title--yellow matchup__title">Who wins??</h3>
            <WarriorDetail
                warriorDetailCssClass="matchup__warrior-detail"
                warrior={ props.opponent1 }
                onClickHandler={eventSelection.bind(this, props.opponent1)}
            />
            <h3 className="title title--large title--yellow title--italic matchup__title matchup__title--third">vs</h3>
            <WarriorDetail
                warriorDetailCssClass="matchup__warrior-detail"
                warrior={ props.opponent2 }
                onClickHandler={eventSelection.bind(this, props.opponent2)}
            />
        </div> : null;

};

/* istanbul ignore next */
const mapStateToProps = (store) => {
    return {
        opponent1: store.warriors.opponent1,
        opponent2: store.warriors.opponent2
    };
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
    return {
        chooseOpponents: () => {
            dispatch(chooseOpponents());
        },
        notify: (message, theme, autoDismissTimeout) => {
            dispatch(notify(message, theme, autoDismissTimeout));
        },
        notifyClear: (id) => {
            dispatch(notifyClear(id));
        }
    };
};

Matchup.displayName = 'Matchup';

Matchup.propTypes = {
    opponent1: PropTypes.object,
    opponent2: PropTypes.object,
    socket: PropTypes.object,
    chooseOpponents: PropTypes.func,
    notify: PropTypes.func,
    notifyClear: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Matchup);