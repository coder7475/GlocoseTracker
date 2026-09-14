import { Ionicons } from '@expo/vector-icons';
import { Share, TouchableOpacity } from 'react-native';
import { Meal } from '@/storage/meals';
import { colors } from '@/styles/global';

type ShareButtonProps = {
  meals: Meal[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `GlucoseTracker Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name='share-outline' size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
