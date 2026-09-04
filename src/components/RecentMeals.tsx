import { Text, View } from 'react-native';
import { globalStyles } from '@/styles/global';
import MealItem from './MealItem';

export default function RecentMeals() {
  return (
    <View style={{ marginTop: 1 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      <MealItem
        name='Chicken & Rice'
        calories={540}
        protein={45}
        carbs={50}
        fat={12}
      />
      <MealItem
        name='Protein Shake'
        calories={280}
        protein={30}
        carbs={20}
        fat={8}
      />
      <MealItem
        name='Salmon Salad'
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
    </View>
  );
}
