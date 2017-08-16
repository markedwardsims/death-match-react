import React from 'react';
import {connect} from 'react-redux';

import 'dmc/components/notification/notification.css';
import Notification from 'dmc/components/notification/notification.js';
import PropTypes from 'prop-types';

export class NotificationWrapper extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.myNotification = new Notification(this.refs.notification, {
            onAfterClick: this.props.onAfterClick,
            autoDismissTimeout: this.props.autoDismissTimeout,
            theme: this.props.theme
        });
    }

    render() {
        return (
            <div ref="notification" className="notification-list__item">{this.props.message}</div>
        );

    }

}

NotificationWrapper.displayName = 'NotificationWrapper';

NotificationWrapper.propTypes = {
    message: PropTypes.string.isRequired,
    theme: PropTypes.string,
    onAfterClick: PropTypes.func.isRequired,
    autoDismissTimeout: PropTypes.number
};

export default NotificationWrapper;