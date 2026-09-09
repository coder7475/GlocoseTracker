import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
};

export const scheduleMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'GloucoseTracker',
      body: "Don't forget to log your lunch!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 12,
      minute: 0,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'GloucoseTracker',
      body: 'Time to log your dinner!',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 18,
      minute: 0,
    },
  });
};

export const cancelMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
