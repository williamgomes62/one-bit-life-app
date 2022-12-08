import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Notification({
  notificationToggle,
  setNotificationToggle
}) {
  const toggleSwitch = () => {
    setNotificationToggle((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificação</Text>
      <Switch
        trackColor={{ flase: '#FF0044', true: '#2DBE56' }}
        thumbColor={'#FFF'}
        ios_backgroundColor={'#3E3E3E'}
        onValueChange={toggleSwitch}
        value={notificationToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleDisabled: {
    color: '#BBB',
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginRight: 10,
  },
});