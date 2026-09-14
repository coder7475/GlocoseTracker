import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import { getMeals, type Meal } from "@/storage/meals";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import ShareButton from "@/components/ShareButton";
import CopyButton from '@/components/CopyButton';
import ReminderToggle from '@/components/ReminderToggle';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    // console.log("Loaded Meals: ", data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  )

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 16, paddingHorizontal: 20 },
      ]}
    >
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Glucose Tracker</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <ReminderToggle />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
});

