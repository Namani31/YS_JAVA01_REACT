import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간이니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // state 선언하고 사용
        this.state = {
            // 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                // 알림 데이터를 `reservedNotifications`로부터 하나씩 가져옴
                notifications.push(reservedNotifications[index]);
                // state에 있는 notifications 배열에 넣고 업데이트
                // 클래스 컴포넌트에서 state를 업데이트 하려면 반드시 setState() 함수를 사용해야 함
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    // notifications 배열을 비워서 언마운트
                    notifications: [],
                })
                clearInterval(timer);
            }

        }, 1000);
    }
    // 컴포넌트가 언마운트 된 이후에는 더 이상 타이머가 돌아가지 않음
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;