import { StyleSheet, View } from 'react-native';
import MacroCard from './MacroCard';

export default function MacroGrid() {
  return (
    <View style={styles.grid}>
      <MacroCard label='Calories' value='0' goal='2,000' color='#ff6b6b' />
      <MacroCard label='Protein' value='0g' goal='150g' color='#4ecdc4' />
      <MacroCard label='Carbs' value='0g' goal='250g' color='#ffd93d' />
      <MacroCard label='Fat' value='0g' goal='65g' color='#6bcb77' />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
