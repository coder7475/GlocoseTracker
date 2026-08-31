import { Text, View, StyleSheet } from "react-native";
import { globalStyles, colors } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <Link href="/meals" style={{ color: '#007bff', fontSize: 18 }}>Go To meals</Link>
    </View>
  );
}

