import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LifeStatus from '../../Components/Common/LifeStatus';
import StatusBar from '../../Components/Home/StatusBar';
import CreteHabit from './CreateHabit';

export default function Home() {
  const navigation = useNavigation();

  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();

  const handleNavHome = () => {
    navigation.navigate('AppExplanation');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.dailyChecks}>
            {'\n'}
            ❤ 20 dias - ✔ 80 checks
            <LifeStatus />
            <StatusBar />
            <CreteHabit habitArea={'Mente'} borderColor={'#90B7F3'}/>
          </Text>
        </View>
        <Text
          style={styles.explanationText}
          onPress={() => handleNavHome()}
        >
          Ver explicação novamente
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
  },
  dailyChecks: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 25,
  },
});