import { StyleSheet, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';

export default function MealsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 16, paddingHorizontal: 20 },
      ]}
    >
      <Text style={globalStyles.title}>All Meals</Text>
      <Link href='/add-meal' style={{ fontSize: 18, color: '#007bff' }}>
        Add New Meal
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
});
