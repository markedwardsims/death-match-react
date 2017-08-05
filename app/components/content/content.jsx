import React from 'react';
import Header from 'header';
import WarriorsList from 'warriorsList';
import Leaderboard from 'leaderboard';
import Matchup from 'matchup';
import NotificationList from 'notificationList';

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
