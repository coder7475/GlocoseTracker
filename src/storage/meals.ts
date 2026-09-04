import AsyncStorage from "@react-native-async-storage/async-storage"

export type Meal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  createdAt: string;
}
const MEAL_KEY = 'meals';


export const getMeals = async (): Promise<Meal[]> => {
  const data = await AsyncStorage.getItem(MEAL_KEY);
  return data ? JSON.parse(data) : [];
}

export const addMeal = async (
  meal: Omit<Meal, 'id'>
): Promise<Meal> => {
  const meals = await getMeals();

  const newMeal: Meal = {
    ...meal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  }

  await AsyncStorage.setItem(MEAL_KEY, JSON.stringify([newMeal, ...meals]));
  return newMeal;
}
