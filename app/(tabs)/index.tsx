import { ScrollView, Text } from "react-native";
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Glocose Tracker</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}

