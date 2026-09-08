import { StyleSheet, View } from 'react-native';
import MacroCard from './MacroCard';
import { type Meal } from '@/storage/meals';

type MacroGridProps = {
  meals: Meal[];
}

export default function MacroGrid({ meals }: MacroGridProps) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <View style={styles.grid}>
      <MacroCard
        label='Calories'
        value={`${totals.calories}`}
        goal='2,000'
        color='#ff6b6b'
      />
      <MacroCard label='Protein' value={`${totals.protein}`} goal='150g' color='#4ecdc4' />
      <MacroCard label='Carbs' value={`${totals.carbs}`} goal='250g' color='#ffd93d' />
      <MacroCard label='Fat' value={`${totals.fat}`} goal='65g' color='#6bcb77' />
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
