import React from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import DefaultButton from '../../Components/Common/DefaultButton';
import LifeStatus from '../../Components/Common/LifeStatus';
import { useNavigation } from '@react-navigation/native';

export default function Start() {
  const handleNavAppExplanation = () => {
    alert('clicou');
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/logo3.png')}
            style={styles.logo}
          />
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar a sua {'\n'} vida em um jogo, buncando sempre {'\n'} {' '}
            o melhor nível.
          </Text>
          <DefaultButton
            buttonText={'Continuar'}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
  },
  description: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40,
  }
});