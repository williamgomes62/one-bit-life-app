import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CreteHabit({ habitArea, borderColor }) {
  function handleCreate() {
    alert('area button');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderColor: borderColor }]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar meta { habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#FFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});