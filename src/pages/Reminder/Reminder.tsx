import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const Reminder = () => {
    useEffect(() => {
        PushNotification.configure({
            onNotification(notification) {
                console.log('Notification received:', notification);
            },
            requestPermissions: true,
        });
    }, []);

    const createReminder = () => {
        PushNotification.localNotificationSchedule({
            message: 'Yemek zamanı geldi!',
            date: new Date(Date.now() + 60 * 1000), // 1 minute later
        });
    };

    return (
        <View>
            <Button title="Hatırlatıcı Oluştur" onPress={createReminder} />
        </View>
    );
};

export default Reminder;
