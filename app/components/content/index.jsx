import React from 'react';
import Header from 'Components/header';
import WarriorsList from 'Containers/warriorsList';
import Leaderboard from 'Containers/leaderboard';
import Matchup from 'Containers/matchup';
import NotificationList from 'Containers/notificationList';
import 'dmc/components/sidebar/sidebar.css';

export const Content = (props) => {

    return (
        <div className="container-fluid">
            <div className="row row--no-gutter">
                <div className="col-xs-12">
                    <Header />
                    <NotificationList />
                </div>
            </div>
            <div className="row row--no-gutter">
                <div className="main col-xs-12 col-md-9 push-md-3">
                    <Matchup socket={props.socket}/>
                </div>
                <aside className="sidebar col-xs-12 col-md-3 pull-md-9">
                    <Leaderboard />
                    <WarriorsList />
                </aside>
            </div>
        </div>
    );

};

export default Content;
