import { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import HabitsData from '../../../Databases/HabitsData';

export default function SelectHabit({ habit, habitInput }) {
  const [selected, setSelected] = useState(
    habit?.habitName ? habit?.habitName : '-'
  );
  const [data, setData] = useState();

    useEffect(() => {
      if (habit?.habitArea === 'Mente') {
        setData(HabitsData.dataMind)
      } else if (habit?.habitArea === 'Financeiro') {
        setData(HabitsData.dataMoney)
      } else if (habit?.habitArea === 'Corpo') {
        setData(HabitsData.dataBody)
      } else if (habit?.habitArea === 'Humor') {
        setData(HabitsData.dataFun)
      }
      habitInput(habit?.habitName ? habit?.habitName : undefined);
    }, []);


  return (
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={() => {
          habitInput(selected);
        }}
        placeholder={selected}
        boxStyles={styles.boxStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        arrowicon={
          <Image
            source={require('../../../assets/icons/arrowDropdown.png')}
            style={styles.arrow}
          />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputStyle: {
    color: '#FFF',
  },
  dropdownStyle: {
    borderWidth: 0,
  },
  dropdownItemStyle: {
    borderWidth: 1,
    borderColor: '#8888',
    borderRadius: 10,
    marginBottom: 10,
  },
  dropdownTextStyle: {
    color: '#888888',
  },
  arrow: {
    width: 20,
    height: 20,
  },
});