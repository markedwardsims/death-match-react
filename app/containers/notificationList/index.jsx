import React from 'react';
import {connect} from 'react-redux';
import Notification from 'Containers/notificationList/notificationWrapper';
import {notifyClear} from 'Actions';
import PropTypes from 'prop-types';

export const NotificationList = (props) => {

    const getNotificationListItems = () => {
        let items = [];
        props.notifications.forEach((notification) => {
            items.push(
                <Notification
                    key={notification.id}
                    onAfterClick={props.notifyClear.bind(null, notification.id)}
                    message={notification.message}
                    theme={notification.theme}
                    autoDismissTimeout={notification.autoDismissTimeout}
                />
            );
        });
        return items;
    };

    return (
        <div className="notification-list">
            {getNotificationListItems()}
        </div>
    );

};

/* istanbul ignore next */
const mapStateToProps = (store) => {
    return {
        notifications: store.notifications
    };
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
    return {
        notifyClear: (id) => {
            dispatch(notifyClear(id));
        }
    };
};

NotificationList.displayName = 'NotificationList';

NotificationList.propTypes = {
    notifications: PropTypes.array.isRequired,
    notifyClear: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);