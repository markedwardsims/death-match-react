import React from 'react';
import Header from 'Components/header';
import WarriorsList from 'Containers/warriorsList';
import Leaderboard from 'Containers/leaderboard';
import Matchup from 'Containers/matchup';
import NotificationList from 'Containers/notificationList';
import 'dmc/components/sidebar/sidebar.css';

export const Content = (props) => {

    return (
        <div className="dm-container-fluid">
            <div className="dm-row dm-row--no-gutter">
                <div className="dm-col-xs-12">
                    <Header />
                    <NotificationList />
                </div>
            </div>
            <div className="dm-row dm-row--no-gutter">
                <div className="dm-main dm-col-xs-12 dm-col-md-9 dm-push-md-3">
                    <Matchup socket={props.socket}/>
                </div>
                <aside className="dm-sidebar dm-col-xs-12 dm-col-md-3 dm-pull-md-9">
                    <Leaderboard />
                    <WarriorsList />
                </aside>
            </div>
        </div>
    );

};

export default Content;
